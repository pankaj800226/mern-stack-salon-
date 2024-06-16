import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/Loading";
import Header from "./components/Header";
const Home = React.lazy(() => import("./pages/Home"));
const Service = React.lazy(() => import("./pages/Service"));
const ServiceDetails = React.lazy(() => import("./pages/ServiceDetails"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Manage = React.lazy(() => import("./pages/admin/Manage"));
const Edit = React.lazy(() => import("./pages/Edit"));
const Feedback = React.lazy(() => import("./pages/admin/Feedback"));
const ChatRoomID = React.lazy(() => import("./pages/ChatRoomID"));
const Register = React.lazy(() => import("./components/Register"));
const Login = React.lazy(() => import("./components/Login"));
const Footer = React.lazy(() => import("./components/Footer"));
const ImployJoin = React.lazy(() => import("./pages/admin/ImployJoin"));
const ImployDataShow = React.lazy(() => import("./pages/admin/ImployDataShow"));
const Instructoe = React.lazy(() => import("./pages/Instructoe"));

import { ProtectedAuth } from "./protectedroute/Protected";

// style component
import "./styles/app.scss";
import "./styles/home.scss";
import "./styles/header.scss";
import "./styles/service.scss";
import "./styles/serviceDetails.scss";
import "./styles/footer.scss";
import "./styles/gallery.scss";
import "./styles/pricesection.scss";
import "./styles/booking.scss";
import "./styles/manage.scss";
import "./styles/feedback.scss";
import "./styles/chatmessage.scss";
import "./styles/signup.scss";
import "./styles/instructor.scss";
import "./styles/dashboard.scss";

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
                path="/service"
                element={
                  <ProtectedAuth>
                    <Service />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/serviceD/:itemId"
                element={
                  <ProtectedAuth>
                    <ServiceDetails />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/gallery"
                element={
                  <ProtectedAuth>
                    <Gallery />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/book"
                element={
                  <ProtectedAuth>
                    <Booking />
                  </ProtectedAuth>
                }
              />

              <Route
                path="/dashboard"
                element={
                  <ProtectedAuth>
                    <Dashboard />
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
              <Route
                path="/feedback"
                element={
                  <ProtectedAuth>
                    <Feedback />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <ProtectedAuth>
                    <Edit />
                  </ProtectedAuth>
                }
              />
              <Route
                path="/chatMesg"
                element={
                  <ProtectedAuth>
                    <ChatRoomID />
                  </ProtectedAuth>
                }
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/imployjoin"
                element={
                  <ProtectedAuth>
                    <ImployJoin />
                  </ProtectedAuth>
                }
              />

              <Route
                path="/showimploy"
                element={
                  <ProtectedAuth>
                    <ImployDataShow />
                  </ProtectedAuth>
                }
              />

              <Route
                path="/instractor"
                element={
                  <ProtectedAuth>
                    <Instructoe />
                  </ProtectedAuth>
                }
              />
            </Routes>
          )}
          <ToastContainer />
          <Footer />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
