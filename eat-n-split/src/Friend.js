import React from "react";
import Button from "./Button";

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.img} alt="friend" />
      <h3>{friend.name} </h3>
      <p>{}</p>
      <Button />
    </li>
  );
}
export default Friend;
