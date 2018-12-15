import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import { CommentConnected } from "../Comment";

export const Review = ({ reviews, reviewId }) => {
  const { author, date, title, body, thumbs, stars, comments } = reviews[
    reviewId
  ];
  return (
    <article>
      <div>Author: {author}</div>
      <div>Date: {format(date, "d MMMM yyyy")}</div>
      <h2>{title}</h2>
      <div>Thumbs: {thumbs}</div>
      <div>Stars: {stars}/6</div>
      <div>
        {body.map(line => (
          <p>{line}</p>
        ))}
      </div>
      <div>
        {comments.map(commentId => (
          <CommentConnected commentId={commentId} />
        ))}
      </div>
      <button>Add comment</button>
    </article>
  );
};

const mapStateToProps = state => ({
  reviews: state.reviews.items.byId
});

export const ReviewConnected = connect(mapStateToProps)(Review);
