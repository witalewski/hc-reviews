import React, { createRef } from "react";
import { connect } from "react-redux";
import {
  formatDateForDisplay,
  formatDateForPersistence
} from "../../utils/dateFormatter";

import {
  addComment,
  saveComment,
  cancelComment
} from "../../state/actions/commentActions";

import { ReviewStyled } from "./ReviewStyled";
import { CommentConnected } from "../Comment";
import { UserConnected } from "../User";
import { ExpandableContentConnected } from "../ExpandableContent";

export const Review = ({
  reviews,
  reviewId,
  ui,
  addComment,
  saveComment,
  cancelComment,
  user
}) => {
  const { author, date, title, body, thumbs, stars, comments } = reviews[
    reviewId
  ];
  const { isCommentBeingAdded } = ui[reviewId];
  const { nextCommentId } = ui;
  const commentInputRef = createRef();
  return (
    <ReviewStyled>
      <UserConnected userId={author} />
      <div className="date">{formatDateForDisplay(date)}</div>
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
        <div>
          <textarea ref={commentInputRef} />
          <button
            className="comment-button"
            onClick={() =>
              saveComment(
                {
                  id: nextCommentId,
                  author: user.id,
                  body: commentInputRef.current.value
                    .split(/\n/g)
                    .filter(line => line.length),
                  date: formatDateForPersistence(new Date())
                },
                reviewId
              )
            }
          >
            Save comment
          </button>
          <button
            className="comment-button"
            onClick={() => cancelComment(reviewId)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button className="comment-button" onClick={() => addComment(reviewId)}>
          Add comment
        </button>
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
