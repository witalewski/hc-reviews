import styled from "@emotion/styled";
import { imageDimensions, spacing } from "../../global/styleConstants";

export const UserStyled = styled.section`
  margin: ${-imageDimensions / 2}px 0 ${spacing.smallest}px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  .name {
    font-weight: bold;
  }

  .picture {
    width: ${imageDimensions}px;
    height: ${imageDimensions}px;
    margin-bottom: ${spacing.smaller}px;
    border: 2px solid white;
    border-radius: 50%;
  }
`;
