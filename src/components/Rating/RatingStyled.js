import styled from "@emotion/styled";
import { colors, spacing } from "../../global/styleConstants";

export const RatingStyled = styled.div`
  width: 306px;
  height: 48px;

  display: flex;
  align-items: stretch;

  .thumbs {
    flex-basis: 66px;

    padding-top: 14px;

    color: white;
    text-align: center;

    &.up {
      background: ${colors.green};
    }

    &.down {
      background: ${colors.red};
    }
  }

  .stars {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 240px;
    border: 1px solid ${colors.mediumLightGray};

    .stars-list {
      list-style: none;
      padding: 0;
      display: flex;

      .fa-star {
        vertical-align: 0;
        margin: ${spacing.smallest}px;
      }

      .full {
        color: ${colors.yellow};
      }

      .empty {
        color: ${colors.mediumLightGray};
      }
    }

    .stars-description {
      font-weight: bold;
    }
  }
`;
