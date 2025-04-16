import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const[isDarkmode, setIsDarkMode]=useState(false);
  const appClass = isDarkmode ? "App dark" : "App light"

  function handleDarkModeToggle(){
    setIsDarkMode((prevMode) => !prevMode);
  }
 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkmode? "Light Mode" :"Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
