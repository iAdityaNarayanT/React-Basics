import { useState } from "react";
import Form from "./Form";

import FriendDetails from "./FriendDetails";
import FriendList from "./FriendList";
// const friends = [
//   { name: "Clark", desc: "You owe Clark $7", img: cdl },
//   { name: "Sarah", desc: "Sarah  owes you $20", img: postman },
//   { name: "Anthony", desc: "You and Anthony are even", img: postman },
// ];
function App() {
  const [friends, setFriend] = useState([]);

  function handleAddFriend(newFriend) {
    setFriend((friends) => [...friends, newFriend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        <Form handleAddFriend={handleAddFriend} />
        <button className="button">Close</button>
      </div>
    </div>
  );
}

export default App;
