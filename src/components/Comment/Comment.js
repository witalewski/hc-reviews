import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import { UserConnected } from "../User";

export const Comment = ({ comments, commentId }) => {
  const { author, date, body } = comments[commentId];
  return (
    <aside>
      <div>
        {body.map(line => (
          <p>{line}</p>
        ))}
      </div>
      <div>Date: {format(date, "d MMMM yyyy")}</div>
      <UserConnected userId={author} />
    </aside>
  );
};

const mapStateToProps = state => ({
  comments: state.reviews.comments.byId
});

export const CommentConnected = connect(mapStateToProps)(Comment);
