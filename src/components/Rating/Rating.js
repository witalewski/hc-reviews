import React from "react";
import { connect } from "react-redux";
import { range } from "../../utils/range";
import { RatingStyled } from "./RatingStyled";

const getStar = (i, className) => (
  <li key={`star-${i}-${className}`}>
    <i className={`fas fa-star fa-lg ${className}`} />
  </li>
);
const getStars = stars =>
  range(1, 6).map(i => getStar(i, i <= stars ? "full" : "empty"));

export const Rating = ({ reviewId, reviews }) => {
  const { thumbs, stars } = reviews[reviewId];
  return (
    <RatingStyled>
      <div className={`thumbs ${thumbs}`}>
        <i className={`fas fa-thumbs-${thumbs} fa-lg`} />
      </div>
      <div className="stars">
        <ul className="stars-list">{getStars(stars)}</ul>
        <div className="stars-description">{stars}/6</div>
      </div>
    </RatingStyled>
  );
};
const mapStateToProps = state => ({
  reviews: state.reviews.items.byId
});
export const RatingConnected = connect(mapStateToProps)(Rating);
