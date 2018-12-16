import styled from "@emotion/styled";
import { maxContainerWidth, colors } from "../../global/styleConstants";

export const MainStyled = styled.main`
  width: 100%;
  max-width: ${maxContainerWidth}px;

  margin-top: 340px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(${colors.lightGray} calc(100% - 60px), transparent calc(100% - 60px));
`;
