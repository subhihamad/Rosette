import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const styles = {
    fontWeight: "bold",
    color: "#AB3333",
  };
  return (
    <>
      <nav className="nav">
        {isDesktopOrLaptop ? (
          <>
            <h1>
              <Link className="text-logo font-logoIcon text-3xl" to="/">
                Rosette
              </Link>
            </h1>
            <ul className="ul-list">
              <li>
                <NavLink
                  end
                  style={({ isActive }) => (isActive ? styles : null)}
                  to="dashoard"
                  className="ul-item"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? styles : null)}
                  className="ul-item"
                  to="reports"
                >
                  Reports
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? styles : null)}
                  className="ul-item"
                  to="/items"
                >
                  Items
                </NavLink>
              </li>
              <li>
                {/* <NavLink
              style={({ isActive }) => (isActive ? styles : null)}
              className="ul-item"
              to='users'
            >
              Users
            </NavLink> */}
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? styles : null)}
                  className="ul-item"
                  to="orders"
                >
                  Orders
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <img className="w-9 h-9 cursor-pointer" src="/Rosette/assets/burger.png" alt="burger icon" />
            <NavLink
                  style={({ isActive }) => (isActive ? styles : null)}
                  className="ul-item"
                  to="/items"
                >
                  Items
                </NavLink>
          </>
        )}

        <div className="nav-info">
          <div className="notifacation">
            <img className="xl:w-8 xl:h-8 w-7 h-7" src="/Rosette/assets/bell.png" />
          </div>
          <div className="xl:w-12 xl:h-12 w-10 h-10 rounded-full bg-userIcon flex justify-center items-center cursor-pointer ">
            <img className="xl:w-8 xl:h-8 w-7 h-7" src="/Rosette/assets/user.png" />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
