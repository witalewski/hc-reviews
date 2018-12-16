import React, { Component, createRef } from "react";
import { connect } from "react-redux";

import { formatDateForPersistence } from "../../utils/dateFormatter";

import { saveComment, cancelComment } from "../../state/actions/commentActions";
import { NewCommentStyled } from "./NewCommentStyled";
import { ActionButton } from "../ActionButton";

export class NewComment extends Component {
  commentInputRef = createRef();

  componentDidMount() {
    this.commentInputRef.current.focus();
  }

  onSaveButtonClick = () => {
    const {
      ui: { nextCommentId },
      user,
      reviewId,
      saveComment
    } = this.props;
    saveComment(
      {
        id: nextCommentId,
        author: user.id,
        body: this.commentInputRef.current.value
          .split(/\n/g)
          .filter(line => line.length),
        date: formatDateForPersistence(new Date())
      },
      reviewId
    );
  };

  onCancelButtonClick = () => {
    const { reviewId, cancelComment } = this.props;
    cancelComment(reviewId);
  };

  render() {
    return (
      <NewCommentStyled>
        <textarea className="comment-input" ref={this.commentInputRef} />
        <ActionButton
          className="comment-button"
          onClick={this.onSaveButtonClick}
        >
          Save comment
        </ActionButton>
        <ActionButton
          className="comment-button"
          onClick={this.onCancelButtonClick}
        >
          Cancel
        </ActionButton>
      </NewCommentStyled>
    );
  }
}

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
