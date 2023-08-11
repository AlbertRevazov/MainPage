import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Source/components/Layout";
import { HomePage } from "./Source/components/Home";
import { MiniApps } from "./Source/components/MiniApps";
import "./App.css";

export const App: FC = () => {
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
           <Route
            path="/apps"
            element={
              <Layout>
                <MiniApps />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
