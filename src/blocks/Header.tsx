import React, { useState } from "react";
import ButtonLink from "../components/ButtonLink";
import { documentConverterData as data } from "../datas/data";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topnav ">
      <div className="container flex flex-row items-center justify-between px-[1.2rem] lg:px-[5.5rem] py-[0.5em] sticky bg-white shadow-lg shadow-gray-150" style={{ width: "100%" , maxWidth: "1520px" }}>
        <Logo />

        {/* Desktop nav (hidden on md and below) */}
        <div className="hidden md:flex flex-row items-center p-[0.6rem]">
          {data.headers.map((header, index) => (
            <ButtonLink key={index} href={header.href} className="text-lg">
              {header.text}
            </ButtonLink>
          ))}
        </div>

        <div className="flex flex-row items-center gap-3 relative">
          <FontAwesomeIcon icon={faSearch} className="cursor-pointer" />

          {/* Hamburger - visible only on md and below */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex md:hidden"
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>

          {/* Login button - visible only on lg and above */}
          <div className="hidden md:block">
            <ButtonLink color="blue">Login</ButtonLink>
          </div>

          {menuOpen && (
            <div className="absolute top-[60px] right-0 bg-white shadow-lg p-4 flex flex-col gap-2 z-50 md:hidden">
              {data.headers.map((header, index) => (
                <ButtonLink key={index} href={header.href} className="text-lg">
                  {header.text}
                </ButtonLink>
              ))}
              <ButtonLink color="blue" className="text-white">
                Login
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;