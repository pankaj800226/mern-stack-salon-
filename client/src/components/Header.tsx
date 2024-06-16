import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
interface User {
  id: string;
  email: string;
}
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const userDataString: string | null = localStorage.getItem("user");

  const user: User | null = userDataString
    ? (JSON.parse(userDataString) as User)
    : null;

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to={"/"}>
          <h3>SALON</h3>
        </Link>
      </div>

      <div className="navbar__toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isOpen ? "navbar__menu active" : "navbar__menu"}>
        <li>
          <Link to="/service" onClick={closeMenu}>
            {" "}
            services
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={closeMenu}>
            {" "}
            gallery
          </Link>
        </li>

        <li>
          <Link to="/instractor" onClick={closeMenu}>
            {" "}
            Instructor
          </Link>
        </li>

        <li>
          <Link to="/book" onClick={closeMenu}>
            booking
          </Link>
        </li>

        {/* <li>
          <Link to="/register" onClick={closeMenu}>
            Signup
          </Link>
        </li> */}

        <li>
          <div>
            <Button
              style={{ color: "black", fontFamily: " Corben, sans-serif" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <h3 className="user">{user?.email.charAt(0)}</h3>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link to={"/dashboard"}>
                <MenuItem onClick={handleClose}>USER</MenuItem>
                <Link to={"/chatMesg"}>
                  <MenuItem onClick={handleClose}>CHAT</MenuItem>
                </Link>
              </Link>
              {user && <MenuItem onClick={logOut}>LOGOUT</MenuItem>}
            </Menu>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
