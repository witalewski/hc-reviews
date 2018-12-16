import styled from "@emotion/styled";
import { imageDimensions, spacing } from "../../global/styleConstants";

export const UserStyled = styled.section`
  margin: 0 ${spacing.smallest}px -${imageDimensions / 2}px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(-${imageDimensions / 2}px);

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
