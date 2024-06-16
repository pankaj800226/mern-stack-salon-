import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
const Home = React.lazy(() => import("./pages/Home"));
import ImployDataShow from "./pages/ImployDataShow";
const Manage = React.lazy(() => import("./pages/Manage"));
const DashBoard = React.lazy(() => import("./pages/Dashboard"));

import Feedback from "./pages/Feedback";
import { ProtectedAuth } from "./protectedroute/Protected";
// style component
import "./styles/app.scss";
import "./styles/footer.scss";
import "./styles/header.scss";
import "./styles/manage.scss";
import "./styles/feedback.scss";
import "./styles/signup.scss";

import Support from "./pages/Support";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<Loading />}>
          {loading ? (
            <Loading />
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedAuth>
                    <Home />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/manage"
                element={
                  <ProtectedAuth>
                    <Manage />
                  </ProtectedAuth>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/dashboard"
                element={
                  <ProtectedAuth>
                    <DashBoard />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/showImploy"
                element={
                  <ProtectedAuth>
                    <ImployDataShow />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/feedback"
                element={
                  <ProtectedAuth>
                    <Feedback />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/support"
                element={
                  <ProtectedAuth>
                    <Support />
                  </ProtectedAuth>
                }
              />
            </Routes>
          )}
          <ToastContainer />
          {/* <Footer /> */}
        </Suspense>
      </Router>
    </>
  );
};

export default App;
