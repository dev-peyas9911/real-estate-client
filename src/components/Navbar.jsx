import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { Sun, Moon } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
// import { AuthContext } from "../providers/AuthProvider"; // (for later when auth is ready)

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext); // (use this when you set up Firebase)
  const [theme, setTheme] = useState("light");

  // fake user for now
  // const user = null;
  const { user, setUser, signOutFunc } = useContext(AuthContext);

  const handleSignout = () => {
    // signOut(auth)
    signOutFunc()
      .then(() => {
        toast.success("Sign out succesfully");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 left-0 w-full z-50  ">
      <div className="navbar-start">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://dreamestate.properties/uploads/3f0af5b2-d04a-45bb-8f1f-301b22f3e54c.png"
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-xl font-bold">DreamEstate</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-properties"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : ""
              }
            >
              All Properties
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/add-properties"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Add Properties
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                to="/my-properties"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                My Properties
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                to="/my-ratings"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                My Ratings
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "light" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>

        {/* Conditional Auth Buttons */}
        {!user ? (
          <>
            <Link to="/signin" className="btn btn-outline btn-primary btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Sign up
            </Link>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <span className="font-semibold">{user?.displayName}</span>
              </li>
              <li>
                <span>{user?.email}</span>
              </li>
              <li>
                <button
                  onClick={handleSignout}
                  className="btn btn-error btn-sm mt-2"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          ☰
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 right-0"
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-properties">All Properties</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/add-properties">Add Properties</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/my-properties">My Properties</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/my-ratings">My Ratings</NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
