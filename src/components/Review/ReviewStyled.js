import styled from "@emotion/styled";
import { spacing } from "../../global/styleConstants";

export const ReviewStyled = styled.article`
  margin: 0 160px 80px 160px;
  background: white;

  padding: 0 ${spacing.mediumLarge}px ${spacing.mediumLarge}px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 10px 30px 10px rgba(0, 0, 0, 0.1);

  transform: translateY(-132px);

  .title {
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    padding: 0 ${spacing.mediumLarge}px;
  }

  .comments-list {
    list-style: none;
    margin-top: 0;
    margin-bottom: ${spacing.medium}px;
    padding: 0;
    align-self: stretch;
  }
`;
