import React from "react";
import { connect } from "react-redux";
import { MainStyled } from "./MainStyled";
import { ReviewConnected } from "../Review";

export const Main = ({ reviewIds }) => {
  return (
    <MainStyled>
      {reviewIds.map(id => (
        <ReviewConnected reviewId={id} />
      ))}
    </MainStyled>
  );
};

const mapStateToProps = state => ({
  reviewIds: state.reviews.items.allIds
});

export const MainConnected = connect(mapStateToProps)(Main);
