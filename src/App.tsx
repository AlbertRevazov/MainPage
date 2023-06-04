import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Source/components/Layout";
import { HomePage } from "./Source/components/Home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

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
        </Routes>
      </BrowserRouter>
      <ToastContainer
        autoClose={2500}
        theme="dark"
        position="bottom-right"
        pauseOnHover
      />
    </div>
  );
};
