import styled from "@emotion/styled";
import {colors, spacing} from "../../global/styleConstants";

export const RatingStyled = styled.div`
.thumbs {
    width: 66px;
    height: 48px;

    padding-top: 13px;

    color: white;
    text-align: center;

    &.up {
        background: ${colors.green};
    }

    &.down {
        background: ${colors.red}
    }
}
`;

