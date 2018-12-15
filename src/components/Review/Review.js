import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import { addComment, saveComment } from "../../state/actions/commentActions";

import { CommentConnected } from "../Comment";

export const Review = ({ reviews, reviewId, ui, addComment, saveComment }) => {
  const { author, date, title, body, thumbs, stars, comments } = reviews[
    reviewId
  ];
  const { isTextExpanded, isCommentBeingAdded } = ui[reviewId];
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
      {isCommentBeingAdded ? (
        <div>
          <textarea />
          <button>Save comment</button>
          <button>Add cancel</button>
        </div>
      ) : (
        <button onClick={() => addComment(reviewId)}>Add comment</button>
      )}
    </article>
  );
};

const mapStateToProps = state => ({
  reviews: state.reviews.items.byId,
  ui: state.ui
});

const mapDispatchToProps = {
  addComment,
  saveComment
};

export const ReviewConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
