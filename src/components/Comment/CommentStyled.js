import styled from "@emotion/styled";
import commentBackground from "../../assets/commentBackground.svg";

export const CommentStyled = styled.aside`
  :before {
    content: "";
    display: block;
    height: 12px;
    width: 100%;
    background-image: url(${commentBackground});
    background-size: cover;
  }

  p {
      margin:0;
      background: #edf0f2;
  }
`;
