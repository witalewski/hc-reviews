import React from "react";
import { formatDateForDisplay } from "../../utils/dateFormatter";
import { DateStyled } from "./DateStyled";

export const Date = ({ date }) => (
  <DateStyled className="date">{formatDateForDisplay(date)}</DateStyled>
);
