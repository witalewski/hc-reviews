import React from "react";

import logo from "../../assets/logo.svg";

import { HeaderStyled } from "./HeaderStyled";
import { Nav } from "../Nav";

export const Header = () => (
  <HeaderStyled>
    <img src={logo} alt="Holiday Check Logo" width={120} />
    <Nav />
  </HeaderStyled>
);
