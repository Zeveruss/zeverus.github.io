import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "program" },
    { href: "#products", label: "Data pendaftar" },
    { href: "#contact-us", label: "Contact Us" },
  ];
  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <Link to="zeverus.github.io/" className="block">
            <img
              src="https://back-adm.vogaon.com/storage/logo/LOGO-382023121001285374263.png"  // Ganti dengan path gambar yang sesuai
              alt="Logo"
              className="h-12 w-auto"
            />
          </Link>

          <ul className="flex-1 flex ml-6 gap-10 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="font-montserrat leading-normal text-lg text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 text-white">
            <Link to="zeverus.github.io/form">Sign in</Link>
            <span>/</span>
            <Link to="zeverus.github.io/">Explore now</Link>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;