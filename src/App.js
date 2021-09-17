import React from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import { Tutorial } from "./PathfindingVisualizer/Tutorial/Tutorial";
function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
      <div className="PopUp">
        <Tutorial />
      </div>
    </div>
  );
}

export default App;
