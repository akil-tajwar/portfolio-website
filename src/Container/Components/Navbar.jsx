import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const aboutPosition = document.getElementById("about")?.offsetTop || 0;
      const educationPosition =
        document.getElementById("education")?.offsetTop || 0;
      const servicesPosition =
        document.getElementById("services")?.offsetTop || 0;
      const portfolioPosition =
        document.getElementById("portfolio")?.offsetTop || 0;
      const contactPosition =
        document.getElementById("contact")?.offsetTop || 0;

      const currentPosition = window.scrollY + window.innerHeight / 2;

      if (currentPosition < aboutPosition) {
        setActive("#");
      } else if (currentPosition < educationPosition) {
        // Fix order: Education should come after About
        setActive("#about");
      } else if (currentPosition < servicesPosition) {
        // Services should come after Education
        setActive("#education");
      } else if (currentPosition < portfolioPosition) {
        setActive("#services");
      } else if (currentPosition < contactPosition) {
        setActive("#portfolio");
      } else {
        setActive("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { label: "Home", to: "#" },
    { label: "About me", to: "#about" },
    { label: "My Education", to: "#education" },
    { label: "Services", to: "#services" },
    { label: "Portfolio", to: "#portfolio" },
    { label: "Contact me", to: "#contact" },
  ];

  const linkClass = (to) =>
    `block px-4 py-3 rounded-lg border-l-4 text-base font-medium duration-200 lg:p-0 lg:border-0 lg:rounded-none lg:text-lg lg:bg-transparent lg:hover:bg-transparent ${
      active === to
        ? "border-[#159e53] bg-[#159e53]/10 primary-color"
        : "border-transparent text-gray-300 hover:bg-white/5 hover:text-white lg:text-white"
    }`;

  return (
    <div
      className={
        isScrolled
          ? "bg-[#141414] shadow fixed w-[100vw] z-10 text-white py-2"
          : `fixed w-[100vw] z-10 text-white py-4`
      }
    >
      <div className="flex flex-row gap-5 w-11/12 lg:w-3/4 mx-auto justify-between items-center">
        <div>
          <img className="w-16" src="/logo 2.png" alt="" />
        </div>

        {/* Hamburger (mobile + tablet) */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="lg:hidden p-2.5 rounded-lg border border-white/20 hover:border-[#159e53] hover:text-[#159e53] duration-200"
        >
          <FaBars className="h-5 w-5" />
        </button>

        {/* Backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Slide-in drawer on mobile/tablet, inline links on desktop */}
        <nav
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 flex flex-col gap-1 p-6 bg-[#181818] border-l border-white/10 shadow-2xl duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          } lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-10 lg:p-0 lg:bg-transparent lg:border-0 lg:shadow-none lg:translate-x-0`}
        >
          {/* Drawer header (hidden on desktop) */}
          <div className="flex items-center justify-between pb-5 mb-4 border-b border-white/10 lg:hidden">
            <img className="w-14" src="/logo 2.png" alt="" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-lg border border-white/20 hover:border-[#159e53] hover:text-[#159e53] duration-200"
            >
              <RxCross2 className="h-5 w-5" />
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.to}
              smooth
              to={link.to}
              className={linkClass(link.to)}
              onClick={() => {
                setActive(link.to);
                setOpen(false);
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA (hidden on desktop) */}
          <Link
            smooth
            to="#contact"
            onClick={() => {
              setActive("#contact");
              setOpen(false);
            }}
            className="mt-auto lg:hidden text-center font-semibold py-3 rounded-lg bg-[#159e53] hover:bg-[#12894a] duration-200"
          >
            Let's talk
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
