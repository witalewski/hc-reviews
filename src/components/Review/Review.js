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
  const { isTextExpanded, isCommentBeingAdded } = ui[reviewId];
  const commentInputRef = createRef();
  return (
    <ReviewStyled>
      <UserConnected userId={author} />
      <div className="date">{formatDateForDisplay(date)}</div>
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
          <textarea ref={commentInputRef} />
          <button
            onClick={() =>
              saveComment(
                {
                  author: user.id,
                  body: commentInputRef.current.value.split(/\n/g),
                  date: formatDateForPersistence(new Date())
                },
                reviewId
              )
            }
          >
            Save comment
          </button>
          <button onClick={() => cancelComment(reviewId)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => addComment(reviewId)}>Add comment</button>
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
