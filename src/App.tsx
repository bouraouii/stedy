import React from "react";

import "./App.css";

function App() {
  const data = [1, 2, 3, 4, 56, 6];
  return (
    <div className="App">
      {data.map((el: number) => (
        <input />
      ))}
    </div>
  );
}

export default App;
