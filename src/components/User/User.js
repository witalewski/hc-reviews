import React from "react";
import { connect } from "react-redux";

export const User = ({ users, userId }) => {
  const { name, picture } = users[userId];
  return (
    <section>
      <img src={picture} alt={name} />
      <div>{name}</div>
    </section>
  );
};

const mapStateToProps = state => ({
  users: state.reviews.users.byId
});

export const UserConnected = connect(mapStateToProps)(User);
