import React, { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import "./GooeyNav.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleClick = (e, navId, navTitle) => {
    e.preventDefault();
    setActive(navTitle);

    const element = document.getElementById(navId);
    if (element) {
      const offset = 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 h-screen z-20 md:flex items-center py-8 px-2 sm:px-4 hidden">
      <div className="flex flex-col gap-2 sm:gap-3 gooey-nav">
        {navLinks.map((nav) => (
          <a
            key={nav.id}
            href={`#${nav.id}`}
            onClick={(e) => handleClick(e, nav.id, nav.title)}
            onMouseEnter={() => setHovered(nav.title)}
            onMouseLeave={() => setHovered("")}
            className={`
              nav-button group relative px-3 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl overflow-hidden
              transition-all duration-500 ease-out
              backdrop-blur-md border-2
              ${
                active === nav.title
                  ? "bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-teal-500/20 text-white shadow-xl shadow-cyan-500/20 border-cyan-400/60 scale-105"
                  : hovered === nav.title
                  ? "bg-white/15 text-white border-white/50 scale-105 shadow-lg shadow-white/10"
                  : "bg-white/5 text-secondary hover:text-white border-white/20"
              }
            `}
          >
            <span className="relative z-10 text-[12px] sm:text-[14px] lg:text-[16px] font-medium whitespace-nowrap transition-all duration-300">
              {nav.title}
            </span>

            <div
              className={`
                gooey-blob absolute inset-0 rounded-xl sm:rounded-2xl
                transition-all duration-700 ease-out
                ${hovered === nav.title ? "blob-active" : ""}
              `}
            />

            <div
              className={`
                absolute inset-0 rounded-xl sm:rounded-2xl
                transition-opacity duration-500
                bg-gradient-to-r from-cyan-400/0 via-blue-400/30 to-teal-400/0
                ${hovered === nav.title ? "opacity-100" : "opacity-0"}
              `}
            />

            <div
              className={`
                glow-effect absolute inset-0 rounded-xl sm:rounded-2xl blur-xl
                transition-opacity duration-500
                bg-gradient-to-r from-cyan-400/40 via-blue-400/40 to-teal-400/40
                ${hovered === nav.title ? "opacity-100" : "opacity-0"}
              `}
            />
          </a>
        ))}
      </div>
    </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 right-0 z-30 flex items-center justify-end p-4">
        <div
          className="w-12 h-12 flex justify-center items-center cursor-pointer backdrop-blur-md bg-white/10 rounded-xl border-2 border-white/30 shadow-lg"
          onClick={() => setToggle(!toggle)}
        >
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain"
          />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } absolute top-20 right-4 min-w-[200px] rounded-xl backdrop-blur-lg bg-gradient-to-b from-black/90 to-black/80 border border-white/20 shadow-2xl`}
        >
          <ul className="list-none flex flex-col gap-3 p-6 w-full">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } font-medium cursor-pointer text-[16px] transition-colors hover:text-white`}
                onClick={(e) => {
                  handleClick(e, nav.id, nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
