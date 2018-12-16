import React, { createRef } from "react";
import { connect } from "react-redux";

import { formatDateForPersistence } from "../../utils/dateFormatter";

import { saveComment, cancelComment } from "../../state/actions/commentActions";
import { NewCommentStyled } from "./NewCommentStyled";
import { ActionButton } from "../ActionButton";

export const NewComment = ({
  reviewId,
  ui,
  user,
  saveComment,
  cancelComment
}) => {
  const { nextCommentId } = ui;
  const commentInputRef = createRef();

  const onSaveButtonClick = () =>
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
    );

  const onCancelButtonClick = () => cancelComment(reviewId);

  return (
    <NewCommentStyled>
      <textarea ref={commentInputRef} />
      <ActionButton className="comment-button" onClick={onSaveButtonClick}>
        Save comment
      </ActionButton>
      <ActionButton className="comment-button" onClick={onCancelButtonClick}>
        Cancel
      </ActionButton>
    </NewCommentStyled>
  );
};

const mapStateToProps = state => ({
  ui: state.ui,
  user: state.user
});

const mapDispatchToProps = {
  saveComment,
  cancelComment
};

export const NewCommentConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment);
