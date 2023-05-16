import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { FirstPage } from "./Source/components/FirstPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
