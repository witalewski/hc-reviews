import styled from "@emotion/styled";
import { colors, spacing } from "../../global/styleConstants";

export const ReviewStyled = styled.article`
  margin: -132px 160px 200px 160px;
  background: white;

  padding: 0 ${spacing.mediumLarge}px ${spacing.mediumLarge}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 28px;
    font-weight: 300;
    padding: 0 ${spacing.mediumLarge}px;
  }
`;
