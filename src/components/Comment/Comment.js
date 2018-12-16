import React from "react";
import { connect } from "react-redux";
import { format } from "date-fns";

import { expandText } from "../../state/actions/uiActions";

import { UserConnected } from "../User";
import { CommentStyled } from "./CommentStyled";

export const Comment = ({ comments, commentId, ui, expandText }) => {
  const { author, date, body } = comments[commentId];
  const { isTextExpanded } = ui[commentId];
  return (
    <CommentStyled>
      <h3 className="header">Comment</h3>
      <div
        className={`content comment-content ${!isTextExpanded ? "content--collapsed comment-content--collapsed" : ""}`}
        onClick={() => expandText(commentId)}
      >
        {body.map(line => (
          <p className="paragraph">{line}</p>
        ))}
        <div className="date">{format(date, "d MMMM yyyy")}</div>
        {!isTextExpanded && <p className="fade-out" />}
      </div>
      <UserConnected userId={author} className="comment-author" />
    </CommentStyled>
  );
};

const mapStateToProps = state => ({
  comments: state.reviews.comments.byId,
  ui: state.ui
});

export const CommentConnected = connect(
  mapStateToProps,
  { expandText }
)(Comment);
