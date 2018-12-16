import styled from "@emotion/styled";
import commentBackground from "../../assets/commentBackground.svg";
import { spacing, colors, fontSize } from "../../global/styleConstants";

export const CommentStyled = styled.aside`
  margin-bottom: 120px;

  background: linear-gradient(transparent 14px, ${colors.mediumLightGray} 0px);

  :before {
    content: "";
    display: block;
    height: 14px;
    width: 100%;
    background-image: url(${commentBackground});
    background-size: cover;
  }

  .header {
    margin: ${spacing.small}px ${spacing.mediumSmall}px ${spacing.smallest}px
      ${spacing.mediumSmall}px;
    padding: 0;
    text-align: center;
    font-weight: 600;
  }

  .content {
    margin: 0 ${spacing.mediumSmall}px;
    padding: 0 ${spacing.mediumSmall}px ${spacing.small}px;

    &.collapsed {
      max-height: 60px;
    }

    .paragraph {
      margin-top: 0;
    }

    .fade-out {
      background-image: linear-gradient(
        to bottom,
        rgba(237, 240, 242, 0),
        rgba(237, 240, 242, 1)
      );
    }
  }

  .comment-author {
    margin-top: -72px;
    font-size: ${fontSize.smaller}px;
    transform: translateY(72px);

    .picture {
      border-color: ${colors.mediumLightGray};
    }
  }
`;
