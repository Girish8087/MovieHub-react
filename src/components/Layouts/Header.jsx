import React from "react";
import { NavLink } from "react-router";

const Header = () => {

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-red-500"
      : "text-gray-300 hover:text-white transition";

  return (
    <header className="w-full sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">

      <div className="flex items-center justify-between px-10 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Movie<span className="text-red-500">Hub</span>
        </h1>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-sm font-semibold">

          <li>
            <NavLink to="/" className={navStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/movies" className={navStyle}>
              Movies
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navStyle}>
              Contact
            </NavLink>
          </li>

        </ul>

      </div>
    </header>
  );
};

export default Header;
