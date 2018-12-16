import React from "react";
import { NavStyled } from "./NavStyled";

export const Nav = () => (
  <NavStyled>
    <ul className="list">
      <li className="list-item">
        <a href="/hc-reviews">Dashboard</a>
      </li>
      <li className="list-item active">Reviews</li>
      <li className="list-item">
        <a href="/hc-reviews">Hotel Manager</a>
      </li>
      <li className="list-item">
        <a href="/hc-reviews">Settings</a>
      </li>
    </ul>
  </NavStyled>
);
