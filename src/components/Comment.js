import React from "react";
import { format } from "date-fns";

export const Comment = ({ comments, commentId }) => {
  const { author, date, body } = comments[
    commentId
  ];
  return (
    <aside>
      <div>Author: {author}</div>
      <div>
        {body.map(line => (
          <p>{line}</p>
        ))}
      </div>
      <div>Date: {format(date, "d MMMM yyyy")}</div>
    </aside>
  );
};
