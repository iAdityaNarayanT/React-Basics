import { useState } from "react";
import { Form } from "./Form";
import { Logo } from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
export default function App() {
  //lifitng up items state to most common parent components so that both items and packinglist component can access it.
  const [items, setItems] = useState([]);
  // adding items to the items array
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    //if the condition id !== item.id returns true then that item will be added to the new array
    setItems((items) => items.filter((item) => id !== item.id));
    // console.log("hello");
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
