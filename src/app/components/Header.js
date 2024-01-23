"use client";
import { useContext, useEffect, useState } from "react";

//react scroll
import { Link as ScrollLink} from "react-scroll";
import Link from "next/link";

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
        header ? "bg-white shadow-sm py-2" : "xl:bg-transparent bg-white"
      } fixed w-full mx-auto z-[20] transition-all duration-300`}
    >
      <div className="xl:container  mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* logo */}
          <Link
            href="/"
            className={`${header ? 'text-black' : 'xl:text-white'} text-2xl font-bold cursor-pointer ml-3 xl:ml-0 flex items-center h-[50px]`}
          >
            LOGO
          </Link>
          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl sm:mr-6" />
            ) : (
              <BiMenuAltRight className="text-4xl sm:mr-6" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav className={`${nav ? 'max-h-max items-center py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0  xl:max-h-max'} flex flex-col w-full bg-white/50 gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center cl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}>
          <ScrollLink
            className="inline-flex text-center justify-center"
            to="home"
            activeClass="active"
            spy
            smooth
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="deneyim"
            activeClass="active"
            smooth
            spy
          >
            Deneyim
          </ScrollLink>
          <Link
            href="/about"
            className="inline-flex text-center w-fit justify-center"
          >
            Hakkımızda
          </Link>
          <ScrollLink
            to="contact"
            activeClass="active"
            smooth
            spy
          >
            Bize Ulaşın
          </ScrollLink>
          <ScrollLink
            to="link4"
            activeClass="active"
            smooth
            spy
          >
            Link4
          </ScrollLink>
          <ScrollLink
            to="link4"
            activeClass="active"
            smooth
            spy
          >
            Link4
          </ScrollLink>
        </nav>
      </div>
    </header>
  );
}
