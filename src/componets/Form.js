import { useState } from "react";

export default function Form({ onAddItems }) {
  let [desc, setDesc] = useState("");
  let [qty, setQty] = useState(1);

  function handleSubit(e) {
    e.preventDefault();

    if (desc == "") return;

    let item = {
      description: desc,
      quantity: qty,
      packed: false,
      id: Date.now()
    };

    onAddItems(item);

    setDesc("");
    setQty(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (val, idx) => idx + 1).map((val, idx) => {
          return (
            <option key={idx} value={val}>
              {val}
            </option>
          );
        })}
      </select>

      <input
        placeholder="item..."
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      ></input>
      <button>ADD</button>
    </form>
  );
}
