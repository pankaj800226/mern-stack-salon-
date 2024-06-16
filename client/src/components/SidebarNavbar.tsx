import { Link } from "react-router-dom";
import { MdDashboard, MdFeedback } from "react-icons/md";
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdTempleBuddhist } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { SiInstructure } from "react-icons/si";

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
        <h2>SALON</h2>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/dashboard")
                  ? "rgb(158, 226, 158)"
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
                  ? "rgb(158, 226, 158)"
                  : "#eee",
              }}
            >
              <Link to="/manage">
                <GrUserManager />
                Manage
              </Link>
            </li>
          </ul>

          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/imployjoin")
                  ? "rgb(158, 226, 158)"
                  : "#eee",
              }}
            >
              <Link to="/imployjoin">
                <MdTempleBuddhist />
                EmployeeJoin
              </Link>
            </li>
          </ul>

          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/showimploy")
                  ? "rgb(158, 226, 158)"
                  : "#eee",
              }}
            >
              <Link to="/showimploy">
                <SiInstructure />
                Instructor
              </Link>
            </li>
          </ul>

          <ul>
            <li
              style={{
                backgroundColor: location.pathname.includes("/feedback")
                  ? "rgb(158, 226, 158)"
                  : "#eee",
              }}
            >
              <Link to="/feedback">
                <MdFeedback />
                Rating
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
