import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Layout } from "./Source/components/Layout";
import { HomePage } from "./Source/components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
