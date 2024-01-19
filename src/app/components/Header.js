"use client";
import { useContext, useEffect, useState } from "react";

//next image
import Image from "next/image";

//react scroll
import { Link } from "react-scroll";

//components
import SearchMobile from "./SearchMobile";

//media query hook
import { useMediaQuery } from "react-responsive";

//icons
import { BiMenuAltRight, BiX } from "react-icons/bi";
export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white shadow-sm py-2" : "bg-transparent"
      } fixed w-full mx-auto z-[20] transition-all duration-300`}
    >
      <div className="xl:container  mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* logo */}
          <Link
            to="home"
            smooth={desktopMode}
            duration={500}
            className={`${header ? 'text-black' : 'text-white'} text-2xl font-bold cursor-pointer flex items-center h-[50px]`}
          >
            LOGO
          </Link>
          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav className={`${nav ? 'max-h-max items-center py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0  xl:max-h-max'} flex flex-col w-full bg-white/50 gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center cl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}>
          <Link
            className="inline-flex text-center justify-center"
            to="home"
            activeClass="active"
            spy
            smooth
          >
            Home
          </Link>
          <Link
            to="hakkimizda"
            className="inline-flex text-center w-fit justify-center"
            activeClass="active"
            smooth
            spy
          >
            Hakkımızda
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth
            spy
          >
            Bize Ulaşın
          </Link>
          <Link
            to="link4"
            activeClass="active"
            smooth
            spy
          >
            Link4
          </Link>
        </nav>
      </div>
    </header>
  );
}
