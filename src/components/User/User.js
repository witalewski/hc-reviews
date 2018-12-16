import React from "react";
import { connect } from "react-redux";

import { UserStyled } from "./UserStyled";

export const User = ({ users, userId, className }) => {
  const { name, picture, role } = users[userId];
  return (
    <UserStyled className={className}>
      <img className="picture" src={picture} alt={name} />
      {role ? (
        <>
          <div className="name">{name}</div>
          <div className="role">{role}</div>
        </>
      ) : (
        <a className="name" href="/">
          {name}
        </a>
      )}
    </UserStyled>
  );
};

const mapStateToProps = state => ({
  users: state.reviews.users.byId
});

export const UserConnected = connect(mapStateToProps)(User);
