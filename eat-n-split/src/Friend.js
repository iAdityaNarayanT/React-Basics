import React from "react";
import Button from "./Button";

function Friend({ friendName, friendDesc, friendImg }) {
  return (
    <li>
      <img src={friendImg} alt="friend" />
      <h3>{friendName} </h3>
      <p>{friendDesc}</p>
      <Button />
    </li>
  );
}
export default Friend;
