import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import { UserConnected } from "../User";
import { CommentStyled } from "./CommentStyled";
import { ExpandableContentConnected } from "../ExpandableContent";

export const Comment = ({ comments, commentId }) => {
  const { author, date, body } = comments[commentId];
  return (
    <CommentStyled>
      <h3 className="header">Comment</h3>
      <ExpandableContentConnected
        id={commentId}
        className="content"
        body={body}
      >
        <div className="date">{format(date, "d MMMM yyyy")}</div>
      </ExpandableContentConnected>
      <UserConnected userId={author} className="comment-author" />
    </CommentStyled>
  );
};

const mapStateToProps = state => ({
  comments: state.reviews.comments.byId,
});

export const CommentConnected = connect(
  mapStateToProps
)(Comment);
