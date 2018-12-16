import styled from "@emotion/styled";
import { colors, fontSize } from "../../global/styleConstants";

export const ActionButton = styled.button`
  width: 230px;
  height: 50px;

  border: none;

font-size: ${fontSize.small}px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.blue};

  background: ${colors.yellow};

  cursor: pointer;
`;
