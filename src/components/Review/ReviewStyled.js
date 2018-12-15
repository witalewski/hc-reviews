import styled from "@emotion/styled";
import { colors } from "../../global/styleConstants";

export const ReviewStyled = styled.article`
  margin: -132px 160px 48px 160px;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  .date {
    color: ${colors.darkGray};
    font-size: 12px;
  }
`;
