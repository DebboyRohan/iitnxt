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
    <nav className="bg-slate-800 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div>
            <NavLink to="/" onClick={handleClick}>
              <h1 className="font-extrabold text-xl">IITNxt</h1>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <NavLink to="/login" className="md:hidden">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-sm"
                onClick={handleClick}
              >
                Login
              </Button>
            </NavLink>
            <button
              className="text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {["Home", "About", "Team"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `hover:text-green-200 hover:scale-110 transition-all duration-300 ease-in-out ${
                        isActive ? "text-green-200" : ""
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
                  className={`hover:text-green-200 hover:scale-110 transition-all duration-300 ease-in-out ${
                    location.pathname === "/school" ||
                    location.pathname === "/college"
                      ? "text-green-200"
                      : ""
                  }`}
                >
                  Programs
                  <span className="ml-1">&#9660;</span>
                </button>
                {isProgramsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-50">
                    <NavLink
                      to="/school"
                      className="block px-4 py-2 hover:bg-slate-700 hover:text-green-200"
                      onClick={() => {
                        setIsProgramsOpen(false);
                        handleClick();
                      }}
                    >
                      School
                    </NavLink>
                    <NavLink
                      to="/college"
                      className="block px-4 py-2 hover:bg-slate-700 hover:text-green-200"
                      onClick={() => {
                        setIsProgramsOpen(false);
                        handleClick();
                      }}
                    >
                      College
                    </NavLink>
                  </div>
                )}
              </li>
            </ul>

            {/* Desktop Admin Button */}
            <NavLink to="/login">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                onClick={handleClick}
              >
                Admin
              </Button>
            </NavLink>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 pb-3`}>
          <ul className="flex flex-col space-y-3">
            {["Home", "About", "Team"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block py-2 hover:text-green-200 transition-all duration-300 ease-in-out ${
                      isActive ? "text-green-200" : ""
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
                className="flex items-center justify-between w-full py-2"
              >
                <span>Programs</span>
                <span>{isProgramsOpen ? "▲" : "▼"}</span>
              </button>
              {isProgramsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <NavLink
                    to="/school"
                    className="block py-2 hover:text-green-200"
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
                    className="block py-2 hover:text-green-200"
                    onClick={() => {
                      setIsOpen(false);
                      setIsProgramsOpen(false);
                      handleClick();
                    }}
                  >
                    College
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
