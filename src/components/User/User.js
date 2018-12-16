import React from "react";
import { connect } from "react-redux";

import { UserStyled } from "./UserStyled";

const getUserDescription = user => {
  let userDescription;
  if (user.isCurrentUser) {
    userDescription = <div className="name">You</div>;
  } else if (user.role) {
    userDescription = (
      <>
        <div className="name">{user.name}</div>
        <div className="role">{user.role}</div>
      </>
    );
  } else {
    userDescription = (
      <a className="name" href="/">
        {user.name}
      </a>
    );
  }
  return userDescription;
};

export const User = ({ users, userId, className }) => {
  const user = users[userId];
  return (
    <UserStyled className={className}>
      <img className="picture" src={user.picture} alt={user.name} />
      {getUserDescription(user)}
    </UserStyled>
  );
};

const mapStateToProps = state => ({
  users: state.reviews.users.byId
});

export const UserConnected = connect(mapStateToProps)(User);
