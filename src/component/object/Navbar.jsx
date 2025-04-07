import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/MovingBorder";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <nav className="font-sans bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm fixed w-full top-0 z-50 h-16 md:h-20">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div>
            <NavLink to="/" onClick={handleClick}>
              <h1 className="font-extrabold text-xl text-indigo-600">IITNxt</h1>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <NavLink to="/login" className="md:hidden">
              <Button
                borderRadius="1.75rem"
                className="bg-indigo-600 text-white border-indigo-700 text-sm font-medium"
                onClick={handleClick}
              >
                Login
              </Button>
            </NavLink>
            <button
              className="text-2xl focus:outline-none text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {["Home", "About", "Team"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `hover:text-indigo-600 transition-all duration-300 font-medium text-gray-700 ${
                        isActive ? "text-indigo-600 font-semibold" : ""
                      }`
                    }
                    onClick={handleClick}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}

              {/* Programs Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                  className={`hover:text-indigo-600 transition-all duration-300 font-medium ${
                    location.pathname === "/school" ||
                    location.pathname === "/college" ||
                    location.pathname === "/mentalHealth"
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  Programs
                  <span className="ml-1">&#9660;</span>
                </button>
                {isProgramsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                    <NavLink
                      to="/school"
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 text-gray-700 font-medium"
                      onClick={() => {
                        setIsProgramsOpen(false);
                        handleClick();
                      }}
                    >
                      School
                    </NavLink>
                    <NavLink
                      to="/college"
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 text-gray-700 font-medium"
                      onClick={() => {
                        setIsProgramsOpen(false);
                        handleClick();
                      }}
                    >
                      College
                    </NavLink>
                    <NavLink
                      to="/mentalHealth"
                      className="block px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 text-gray-700 font-medium"
                      onClick={() => {
                        setIsProgramsOpen(false);
                        handleClick();
                      }}
                    >
                      Mental Health
                    </NavLink>
                  </div>
                )}
              </li>
            </ul>

            {/* Desktop Admin Button */}
            <NavLink to="/login">
              <Button
                borderRadius="1.75rem"
                className="bg-indigo-600 text-white border-indigo-700 font-medium"
                onClick={handleClick}
              >
                Admin
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden mt-4 pb-3 bg-white rounded-lg shadow-lg`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            {["Home", "About", "Team"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block py-2 hover:text-indigo-600 transition-all duration-300 font-medium text-gray-700 ${
                      isActive ? "text-indigo-600 font-semibold" : ""
                    }`
                  }
                  onClick={() => {
                    setIsOpen(false);
                    handleClick();
                  }}
                >
                  {item}
                </NavLink>
              </li>
            ))}

            {/* Mobile Programs Dropdown */}
            <li>
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700 font-medium"
              >
                <span>Programs</span>
                <span>{isProgramsOpen ? "▲" : "▼"}</span>
              </button>
              {isProgramsOpen && (
                <div className="ml-4 mt-2 space-y-3 pl-4 border-l-2 border-indigo-100 bg-white">
                  <NavLink
                    to="/school"
                    className="block py-2 hover:text-indigo-600 text-gray-600 font-medium"
                    onClick={() => {
                      setIsOpen(false);
                      setIsProgramsOpen(false);
                      handleClick();
                    }}
                  >
                    School
                  </NavLink>
                  <NavLink
                    to="/college"
                    className="block py-2 hover:text-indigo-600 text-gray-600 font-medium"
                    onClick={() => {
                      setIsOpen(false);
                      setIsProgramsOpen(false);
                      handleClick();
                    }}
                  >
                    College
                  </NavLink>
                  <NavLink
                    to="/mentalHealth"
                    className="block py-2 hover:text-indigo-600 text-gray-600 font-medium"
                    onClick={() => {
                      setIsOpen(false);
                      setIsProgramsOpen(false);
                      handleClick();
                    }}
                  >
                    Mental Health
                  </NavLink>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
