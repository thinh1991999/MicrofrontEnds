import React, { useCallback } from "react";
import { connect } from "react-redux";
import "./Navigation.scss";

function Navigation({ user, updateUser }) {
  function handleUpdateClick() {
    const updatedUser = { name: "Alice", email: "alice@example.com" };
    updateUser(updatedUser);
  }
  return (
    <div className="">
      <span>{user?.name}</span>
      <span>{user?.age}</span>
      <button onClick={handleUpdateClick}>Update User</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: (user) => dispatch({ type: "UPDATE_USER", payload: user }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
