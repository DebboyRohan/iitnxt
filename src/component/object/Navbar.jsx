import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/MovingBorder";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <nav className="bg-slate-800 text-white p-4 shadow-lg sticky top-5 z-50 md:mx-80 mx-4 rounded-lg">
      <div className="flex justify-center items-center">
        <div>
          <NavLink to="/" onClick={handleClick}>
            <h1 className="font-extrabold text-xl">IITNxt</h1>
          </NavLink>
        </div>
        <div className="container mx-auto flex justify-center items-center">
          <div>
            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Navigation Links */}
          <div>
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } md:flex flex-col items-start md:flex-row md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-slate-800 rounded-b-xl md:bg-transparent p-4 md:p-0 transition-all`}
            >
              {["Home", "About", "Team"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-2 md:py-0 hover:text-green-200 hover:scale-110 transition-all duration-300 ease-in-out ${
                        isActive ? "text-green-200" : ""
                      }`
                    }
                    onClick={() => {
                      setIsOpen(false); // ✅ Close dropdown
                      handleClick();
                    }}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
    </nav>
  );
}

export default Navbar;
