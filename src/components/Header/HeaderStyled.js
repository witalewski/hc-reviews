import styled from "@emotion/styled";
import { maxContainerWidth } from "../../global/styleConstants";

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: ${maxContainerWidth}px;

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  padding: 0 24px 0 36px;

  background: white;

  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.1);
`;
