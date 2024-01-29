import React from "react";
import cdl from "./CDL.png";
import Friend from "./Friend";
import postman from "./Postman.png";

function FriendList({ friends }) {
  const friendList = friends.map((friend) => (
    <Friend
      friendName={friend.friendName}
      friendDesc={friend.desc}
      friendImg={friend.imgurl}
      key={friend.id}
    />
  ));
  return <ul>{friendList}</ul>;
}

export default FriendList;
