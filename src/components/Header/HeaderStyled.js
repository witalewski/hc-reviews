import styled from "@emotion/styled";
import { maxContainerWidth } from "../../global/styleConstants";

export const HeaderStyled = styled.header`
  width: 100%;
  max-width: ${maxContainerWidth};

  display: flex;
  justify-content: space-between;
  align-items: stretch;

  padding: 0 24px 0 36px;

  background: white;
`;
