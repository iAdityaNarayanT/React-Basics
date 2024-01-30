import React, { useState } from "react";

function Form({ handleAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imgurl, setImgUrl] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !imgurl) return; //Gaurd clause to return nothing if no item is entered

    const newFriend = {
      friendName,
      imgurl,
      id: Date.now(),
    };
    handleAddFriend(newFriend);

    setFriendName("");
    setImgUrl("");
  }
  return (
    <form className="form-add-friend " onSubmit={handleSubmit}>
      <label>👻Friend Name</label>
      <input
        className="form-add-friend"
        type="text"
        placeholder="item"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      ></input>
      <label>🪟Image URL</label>

      <input
        type="text"
        placeholder="item"
        value={imgurl}
        onChange={(e) => setImgUrl(e.target.value)}
      ></input>
      <button className="button">ADD</button>
    </form>
  );
}

export default Form;
