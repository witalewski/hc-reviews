import React from "react";
import { connect } from "react-redux";

import { UserStyled } from "./UserStyled";

export const User = ({ users, userId }) => {
  const { name, picture, role } = users[userId];
  return (
    <UserStyled>
      <img className="picture" src={picture} alt={name} />
      <div>{name}</div>
      {role && <div>{role}</div>}
    </UserStyled>
  );
};

const mapStateToProps = state => ({
  users: state.reviews.users.byId
});

export const UserConnected = connect(mapStateToProps)(User);
