import styled from "@emotion/styled";
import { colors } from "../../global/styleConstants";

export const ActionButton = styled.button`
  width: 230px;
  height: 50px;

  border: none;

  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.blue};

  background: ${colors.yellow};

  cursor: pointer;
`;
