"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { childNavMenus } from "@/constants/menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  const [isChildMenuOpen, setIsChildMenuOpen] = useState<boolean>(false);
  const activeNavClass = `bg-white/5 border-b border-white/5 shadow-lg ring-1 ring-black/5 isolate ${
    isChildMenuOpen ? "backdrop-blur-md" : "backdrop-blur-sm"
  }`;

  const handleMenuOpen = () => {
    setIsChildMenuOpen(!isChildMenuOpen);

    if (isChildMenuOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const href = event.currentTarget.href;
    const hashIndex = href.indexOf("#");

    isChildMenuOpen && setIsChildMenuOpen(!isChildMenuOpen),
      document.body.classList.remove("overflow-hidden");

    if (hashIndex !== -1) {
      const id = href.slice(hashIndex + 1);
      const element = document.getElementById(id);

      element && element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleSrolledDown = () => {
      if (window.scrollY > 10) {
        setIsNavActive(true);
      } else {
        setIsNavActive(false);
      }
    };

    window.addEventListener("scroll", handleSrolledDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-10 h-fit w-full border-transparent transition-all duration-500 ease-in-out",
          (isNavActive && activeNavClass) ||
            (isChildMenuOpen && activeNavClass),
        )}
      >
        <nav
          className={cn(
            `relative min-h-[40px] p-6 text-sm lg:px-24 2xl:mx-auto 2xl:max-w-7xl ${
              isChildMenuOpen
                ? "grid h-screen grid-cols-2 grid-rows-12 items-center"
                : "flex justify-between"
            }`,
          )}
        >
          <Link
            href={"/"}
            className={`self-start tracking-widest ${
              isNavActive || isChildMenuOpen ? "text-white" : ""
            }`}
            onClick={() => {
              setIsChildMenuOpen(false);
              document.body.classList.remove("overflow-hidden");
            }}
          >
            FAR.CLOUD
          </Link>
          <div className="hidden gap-4 md:flex">
            {childNavMenus.map((menu) => (
              <a
                className="transition-all duration-500 hover:text-white"
                key={menu.label}
                href={menu.href}
                onClick={handleMenuClick}
              >
                {menu.label}
              </a>
            ))}
          </div>
          <button
            onClick={handleMenuOpen}
            className="inline-flex place-content-end self-start md:hidden"
          >
            {!isChildMenuOpen ? Menu : CloseMenu}
          </button>
          {isChildMenuOpen &&
            childNavMenus.map((menu) => (
              <div
                key={menu.label}
                className="col-[1/3] h-full w-full place-content-center"
              >
                <a
                  className="block w-full hover:text-white"
                  href={menu.href}
                  onClick={handleMenuClick}
                >
                  {menu.label}
                </a>
              </div>
            ))}
        </nav>
        <div className="absolute -bottom-2 left-1/2 -z-[1] hidden size-5 w-full -translate-x-1/2 bg-gradient-to-b from-white/0 to-white/10 blur-md md:block"></div>
      </header>
    </>
  );
}

const Menu = (
  <svg
    data-testid="geist-icon"
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
    color="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z"
      fill="currentColor"
    ></path>
  </svg>
);

const CloseMenu = (
  <svg
    data-testid="geist-icon"
    height="16"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    width="16"
    color="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z"
      fill="currentColor"
    ></path>
  </svg>
);
