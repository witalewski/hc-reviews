import React from "react";
import { format } from "date-fns";

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
        {comments.map(comment => (
          <p>{comment}</p>
        ))}
      </div>
      <button>Add comment</button>
    </article>
  );
};
