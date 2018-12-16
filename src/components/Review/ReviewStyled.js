import styled from "@emotion/styled";
import { spacing } from "../../global/styleConstants";

export const ReviewStyled = styled.article`
  margin: 0 160px 80px 160px;
  background: white;

  padding: 0 ${spacing.mediumLarge}px ${spacing.mediumLarge}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(-132px);

  .title {
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    padding: 0 ${spacing.mediumLarge}px;
  }

  .comment {
    align-self: stretch;
  }
`;
