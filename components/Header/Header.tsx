"use client";

import data from "@/data/navigation.json";
import { useState } from "react";
import * as Icons from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

interface HeaderProps {
  onImpressumClick?: () => void;
}

export default function Header({ onImpressumClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkBase =
    "relative inline-flex items-center w-full sm:w-auto sm:max-w-[70px] h-[50px] " +
    "rounded-[8px] overflow-hidden text-white no-underline " +
    "transition-[max-width] duration-300 ease-in-out sm:justify-center " +
    "sm:hover:max-w-max sm:focus:max-w-max group gap-3 sm:gap-0 whitespace-nowrap " +
    "px-8";

  const iconWrapper =
    "w-5 h-5 text-white flex-shrink-0 icon " +
    "sm:absolute sm:left-10 sm:top-1/2 sm:-translate-y-1/2";

  const title =
    "text-black dark:text-white text-left " +
    "sm:pl-[calc(80px+1rem)] " +
    "sm:transform sm:translate-x-full sm:transition-transform sm:duration-200 sm:ease-in sm:opacity-0 " +
    "sm:group-hover:translate-x-0 sm:group-hover:opacity-100";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full flex justify-center items-start relative">
      {/* mobile toggle button */}
      <button
        className="sm:hidden absolute top-2 left-2 p-2 text-white z-20"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((o) => !o)}
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* navigation */}
      <nav
        className={`${menuOpen ? "block" : "hidden"} w-full sm:flex sm:justify-center`}
      >
        <div className="w-full sm:w-[60%] mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 p-4 bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-xl relative rounded-2xl shadow-lg mt-12 sm:mt-2">
          {data.map((item: NavItem, idx: number) => {
            const Icon = Icons[item.icon as keyof typeof Icons] as React.FC<{ className?: string }>;

            return (
              <a
                key={item.href || idx}
                href={item.href}
                className={linkBase}
                onClick={closeMenu}
              >
                <span className="absolute inset-0 rounded-lg bg-[#eee] dark:bg-[#111] transform translate-x-full transition-transform duration-200 ease-in sm:group-hover:translate-x-0 sm:group-focus:translate-x-0 -z-10" />
                <span className={`${iconWrapper} [&_svg]:fill-current`}>
                  {Icon ? <Icon className="w-full h-full" /> : null}
                </span>
                <span className={title}>{item.name}</span>
              </a>
            );
          })}
          
          {/* Impressum Button */}
          <button
            onClick={() => {
              onImpressumClick?.();
              closeMenu();
            }}
            className={linkBase}
            aria-label="Open Impressum"
          >
            <span className="absolute inset-0 rounded-lg bg-[#eee] dark:bg-[#111] transform translate-x-full transition-transform duration-200 ease-in sm:group-hover:translate-x-0 sm:group-focus:translate-x-0 -z-10" />
            <span className={`${iconWrapper} [&_svg]:fill-current`}>
              <Icons.Scale className="w-full h-full" />
            </span>
            <span className={title}>Impressum</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
