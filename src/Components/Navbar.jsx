import React from "react";
import Logo from "../assets/logo-2.png";

const Navbar = () => {
  const navigation = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
  ];

  return (
    <header>
      <div className="navbar glassMorphism text-white">
        {/* Dropdown Menu and Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content glassMorphism -left-4 mt-5 w-52 z-1 md:mt-8"
            >
              {navigation.map(({ id, path, name }) => (
                <li key={id}>
                  <a href={path}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <a className="logo flex items-center cursor-pointer group">
            <img src={Logo} alt="Website logo" className="w-10 h-10 md:w-16 md:h-16" />
            <span className="text-lg md:text-2xl font-bold">
              <span className="text-white group-hover:text-[#3b82f6] transition-colors duration-200 ease-linear">
                Sky
              </span>
              <span className="text-[#3b82f6] group-hover:text-white transition-colors duration-200 ease-linear">
                Cast
              </span>
            </span>
          </a>
        </div>

        {/* Nav Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6">
            {navigation.map(({ id, path, name }) => (
              <li>
                <a key={id} href={path}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Search Box */}
        <div className="navbar-end">
          <label className="relative flex items-center">
            {/* Search Icon */}
            <svg
              className="absolute left-3 h-5 w-5 text-white/50 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.7" y2="16.7" />
            </svg>

            {/* Input */}
            <input
              type="search"
              required
              placeholder="Search city..."
              className="pl-10 pr-4 py-2 w-40 md:w-72 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-[#3b82f6] focus:border-[#3b82f6] transition-all"
            />
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
