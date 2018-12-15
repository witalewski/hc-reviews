import styled from "@emotion/styled";
import { colors, spacing } from "../../global/styleConstants";

export const ReviewStyled = styled.article`
  margin: -132px 160px 200px 160px;
  background: white;

  padding: 0 ${spacing.extraLarge}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .date {
    color: ${colors.darkGray};
    font-size: 12px;
  }

  .title {
    font-size: 28px;
    font-weight: 300;
  }

  .content {
    max-height: 90px;
    margin-bottom: ${spacing.medium}px;
    position: relative;
    overflow: hidden;
  }

  .fade-out {
    position: absolute;
    margin: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to bottom, transparent, white);
  }
`;
