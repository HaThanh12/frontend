import { useState } from "react";
import type { FC } from "react";
import ButtonLink from "../components/ButtonLink";
import Logo from "../components/Logo";
import { documentConverterData as data } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <header className="topnav">
      <div className="container flex flex-row flex-wrap items-center w-9xl md:w-5xl justify-between gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-[2.5rem] py-[0.6em]">
        {/* Logo */}
        <div className="text-sm sm:text-base lg:text-md">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex flex-wrap items-center justify-center">
          {data.headers.map((header, index) => (
            <ButtonLink
              key={index}
              href={header.href}
              className="text-sm sm:text-base lg:text-md"
            >
              {header.text}
            </ButtonLink>
          ))}
        </div>

        <div className="hidden sm:flex items-center text-sm sm:text-base lg:text-md">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-[1rem]" />
          <ButtonLink color="blue" className="text-sm sm:text-base lg:text-md">
            Login
          </ButtonLink>
        </div>

        <button
          className="sm:hidden flex items-center text-xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-3 px-4 pb-4">
          {data.headers.map((header, index) => (
            <ButtonLink
              key={index}
              href={header.href}
              className="text-base"
              onClick={closeMenu}
            >
              {header.text}
            </ButtonLink>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <ButtonLink color="blue" className="text-base" onClick={closeMenu}>
              Login
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
