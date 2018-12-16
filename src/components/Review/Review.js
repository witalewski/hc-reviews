import React from "react";
import { connect } from "react-redux";

import {
  addComment,
  saveComment,
  cancelComment
} from "../../state/actions/commentActions";

import { ReviewStyled } from "./ReviewStyled";
import { CommentConnected } from "../Comment";
import { UserConnected } from "../User";
import { ExpandableContentConnected } from "../ExpandableContent";
import { Date } from "../Date";
import { NewCommentConnected } from "../NewComment";
import { ActionButton } from "../ActionButton";
import { RatingConnected } from "../Rating/Rating";

const getCommentListItem = commentId => (
  <li key={commentId}>
    <CommentConnected commentId={commentId} />
  </li>
);

export const Review = ({ reviews, reviewId, ui, addComment }) => {
  const { author, date, title, body, comments } = reviews[reviewId];
  const { isCommentBeingAdded } = ui[reviewId];
  return (
    <ReviewStyled>
      <UserConnected userId={author} />
      <Date date={date} />
      <h2 className="title">{title}</h2>
      <RatingConnected reviewId={reviewId} />
      <ExpandableContentConnected
        id={reviewId}
        className="content"
        body={body}
      />
      {comments.length > 0 && (
        <ul className="comments-list">{comments.map(getCommentListItem)}</ul>
      )}
      {isCommentBeingAdded ? (
        <NewCommentConnected reviewId={reviewId} />
      ) : (
        <ActionButton onClick={() => addComment(reviewId)}>
          Add comment
        </ActionButton>
      )}
    </ReviewStyled>
  );
};

const mapStateToProps = state => ({
  reviews: state.reviews.items.byId,
  ui: state.ui,
  user: state.user
});

const mapDispatchToProps = {
  addComment,
  saveComment,
  cancelComment
};

export const ReviewConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);
