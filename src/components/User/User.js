import React from "react";
import { connect } from "react-redux";

export const User = ({ users, userId }) => {
  const { name, picture, role } = users[userId];
  return (
    <section>
      <img src={picture} alt={name} />
      <div>{name}</div>
      {role && <div>{role}</div>}
    </section>
  );
};

const mapStateToProps = state => ({
  users: state.reviews.users.byId
});

export const UserConnected = connect(mapStateToProps)(User);
