import React from "react";
import Header from "./Header/Header";
import "../App.css";
import ItemsControl from "./Items/ItemsControl";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemsControl></ItemsControl>
    </div>
  );
}

export default App;
