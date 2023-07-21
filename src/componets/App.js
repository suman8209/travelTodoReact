import { useState } from "react";
import "../styles.css";

import Header from "./Header";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);
  // items: [{id, desc, quantity, packed}, {id, desc, quantity, packed}]
  // add, update, delete

  // item: {id, desc, quantity, packed}

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleToggleItem(id) {
    const updatedItems = items.map((item) => {
      return item.id === id ? { ...item, packed: !item.packed } : item;
    });

    setItems(updatedItems);
  }

  function handleDeleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleToggleItem={handleToggleItem}
        handleDeleteItem={handleDeleteItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
