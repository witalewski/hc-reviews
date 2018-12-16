import React from "react";
import { connect } from "react-redux";

import { UserConnected } from "../User";
import { CommentStyled } from "./CommentStyled";
import { ExpandableContentConnected } from "../ExpandableContent";
import { Date } from "../Date";

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
        <Date date={date} />
      </ExpandableContentConnected>
      <UserConnected userId={author} className="comment-author" />
    </CommentStyled>
  );
};

const mapStateToProps = state => ({
  comments: state.reviews.comments.byId
});

export const CommentConnected = connect(mapStateToProps)(Comment);
