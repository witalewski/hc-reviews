import styled from "@emotion/styled";
import { colors, spacing } from "../../global/styleConstants";

export const ReviewStyled = styled.article`
  margin: -132px 160px 200px 160px;
  background: white;

  padding: 0 ${spacing.extraLarge}px ${spacing.medium}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .date {
    color: ${colors.darkGray};
    font-size: 11px;
    font-weight: 300;
  }

  .title {
    font-size: 28px;
    font-weight: 300;
  }

  .content {
    position: relative;
    margin-bottom: ${spacing.medium}px;
  }

  .content--collapsed {
    overflow: hidden;
    max-height: 90px;
    cursor: pointer;
  }

  .fade-out {
    position: absolute;
    margin: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to bottom, transparent, white);
  }

  .comment-button {
    width: 230px;
    height: 50px;

    border: none;

    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${colors.blue};

    background: ${colors.yellow};

    cursor: pointer;
  }
`;
