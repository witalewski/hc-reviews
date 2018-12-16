import styled from "@emotion/styled";

import background from "./assets/background.jpg";

export const AppStyled = styled.div`
  min-height: 100vh;

  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: url(${background}) top center no-repeat, white;
  background-size: 100vw;
`;
