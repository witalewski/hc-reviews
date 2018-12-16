import React from "react";
import { connect } from "react-redux";
import { RatingStyled } from "./RatingStyled";

export const Rating = ({ reviewId, reviews }) => {
  const { thumbs, stars } = reviews[reviewId];
  return (
    <RatingStyled>
      <div className={`thumbs ${thumbs}`}>
        <i className={`fas fa-thumbs-${thumbs} fa-lg`} />
      </div>
      <div>Stars: {stars}/6</div>
    </RatingStyled>
  );
};
const mapStateToProps = state => ({
  reviews: state.reviews.items.byId
});
export const RatingConnected = connect(mapStateToProps)(Rating);
