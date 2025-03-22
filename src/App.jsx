import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App container mx-auto">
      <Header />
      <Main />
    </div>
  );
}

export default App;
