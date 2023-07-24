import { useState } from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true }
];

function PackingList({
  items,
  handleToggleItem,
  handleDeleteItem,
  handleClearList
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem = [];
 
  if (sortBy == "input") {
    sortedItem = items;
  }

  console.log(items);

  if (sortBy === "desc") {
    console.log(items);
    sortedItem = items.slice().sort((i1, i2) => {
      return i1.description.localeCompare(i2.description);
    });
  
    console.log("sortedItems");
    console.log(sortedItem);
  }

  if (sortBy === "packed") {
    sortedItem = items
      .slice()
      .sort((i1, i2) => Number(i1.packed) - Number(i2.packed));
  }

  return (
    <div className="list">
      <ul>  
        {sortedItem.map((eItem) => {
          return (
            <Item
              item={eItem}
              handleToggleItem={handleToggleItem}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            console.log(e.target.value);
            setSortBy(e.target.value);
          }}
        >
          <option value="input">Sort By Input Order</option>
          <option value="desc">Sort Alphabatically</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList