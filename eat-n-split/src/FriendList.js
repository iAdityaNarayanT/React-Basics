import React from "react";
import cdl from "./CDL.png";
import Friend from "./Friend";
import postman from "./Postman.png";

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
}

export default FriendList;
