import styled from "@emotion/styled";
import { colors, spacing, breakpoint } from "../../global/styleConstants";
import commentBackground from "../../assets/commentBackground.svg";

export const NewCommentStyled = styled.div`
  width: 100%;

  padding: 0 ${spacing.mediumSmall}px ${spacing.small}px;

  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: linear-gradient(transparent 10px, ${colors.mediumLightGray} 0px);

  :before {
    content: "";
    display: block;
    height: 10px;
    width: 100%;
    background-image: url(${commentBackground});
    background-size: cover;
  }

  .comment-input {
    flex-basis: calc(100% - 2 * ${spacing.small}px);
    min-height: 90px;
    margin: ${spacing.small}px;
  }

  .comment-button {
    flex-basis: calc(50% - 2 * ${spacing.small}px);
    margin: ${spacing.smaller}px ${spacing.small}px;
  }

  @media all and (max-width: ${breakpoint}px) {
    padding-top: 3px;
  }
`;
