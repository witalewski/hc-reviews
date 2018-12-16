import styled from "@emotion/styled";
import { spacing } from "../../global/styleConstants";

export const ExpandableContentStyled = styled.div`
  position: relative;
  margin-bottom: ${spacing.mediumSmall}px;
  padding: 0 ${spacing.mediumLarge}px;

  &.collapsed {
    max-height: 110px;
    overflow: hidden;
    cursor: pointer;
  }

  .fade-out {
    position: absolute;
    margin: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 40px;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
`;
