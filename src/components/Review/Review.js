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

export const Review = ({ reviews, reviewId, ui, addComment }) => {
  const { author, date, title, body, thumbs, stars, comments } = reviews[
    reviewId
  ];
  const { isCommentBeingAdded } = ui[reviewId];
  return (
    <ReviewStyled>
      <UserConnected userId={author} />
      <Date date={date} />
      <h2 className="title">{title}</h2>
      <div>Thumbs: {thumbs}</div>
      <div>Stars: {stars}/6</div>
      <ExpandableContentConnected
        id={reviewId}
        className="content"
        body={body}
      />
      <div>
        {comments.map(commentId => (
          <CommentConnected key={commentId} commentId={commentId} />
        ))}
      </div>
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
