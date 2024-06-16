import { Link } from "react-router-dom";
import { MdDashboard ,MdFeedback} from "react-icons/md";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import {MdTempleBuddhist} from 'react-icons/md'
import {GiLifeSupport} from 'react-icons/gi'



const SidebarNavbar = () => {
  const [show, setShow] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1100);

  const resizeHandle = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hambuger" onClick={() => setShow(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: show ? 0 : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Salon</h2>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/dashboard")
                  ? "rgba(0, 115,255,0.1)"
                  : "#eee",
              }}
            >
              <Link to="/dashboard">
                <MdDashboard />
                DashBoard
              </Link>
            </li>
          </ul>

          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/manage")
                  ? "rgba(0, 115,255,0.1)"
                  : "#eee",
              }}
            >
              <Link to="/manage">
                <MdDashboard />
                Manage
              </Link>
            </li>
          </ul>

          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/showimploy")
                  ? "rgba(0, 115,255,0.1)"
                  : "#eee",
              }}
            >
              <Link to="/showimploy">
                <MdTempleBuddhist />
                Employees
              </Link>
            </li>
          </ul>

          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/feedback")
                  ? "rgba(0, 115,255,0.1)"
                  : "#eee",
              }}
            >
              <Link to="/feedback">
                <MdFeedback />
                Rating
              </Link>
            </li>
          </ul>

          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/support")
                  ? "rgba(0, 115,255,0.1)"
                  : "#eee",
              }}
            >
              <Link to="/support">
                <GiLifeSupport />
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* second  */}

        {phoneActive && (
          <button id="close_sidebar" onClick={() => setShow(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

export default SidebarNavbar;
