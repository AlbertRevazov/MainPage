import { FC, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const Layout = lazy(() => import("./Source/common/Layout"));
const HomePage = lazy(() => import("./Source/components/Home"));
const MiniApps = lazy(() => import("./Source/components/MiniApps"));

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
