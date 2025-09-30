"use client";
import { PiClose, PiMenu } from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const MobileNavigations = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:hidden flex">
      <button
        onClick={() => setIsMenuOpen(true)}
        aria-label="menu-icon"
        className="p-2 text-gray-700 cursor-pointer "
      >
        <PiMenu />
      </button>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "fixed top-0 left-0 z-40 bg-gray-700/70 dark:bg-gray-800/50 w-full h-full transition-all duration-500",
          isMenuOpen ? "left-0" : "-left-full"
        )}
      ></div>
      <nav
        className={cn(
          "lg:hidden block fixed top-0 z-50 bg-primary py-12 px-10 min-h-screen w-full max-w-[320px] transition-all duration-500 delay-200",
          isMenuOpen ? "left-0" : "-left-full"
        )}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="close-menu"
          className="absolute right-3 top-3"
        >
          <PiClose className={"size-5"} />
        </button>
        <ul className="flex flex-col items-start gap-3">
          {navItems.map(({ href, label, badge }) => (
            <li key={label} className="flex items-center gap-1.5">
              <Link
                href={href}
                className="tracking-[-0.2px] font-medium hover:text-secondary transition-all duration-500"
              >
                {label}
              </Link>
              {badge?.text && (
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-2xl text-xs font-medium tracking-[-0.2px] leading-[133.333%] flex justify-center items-center",
                    badge.variant === "danger"
                      ? "bg-[#EF444426] text-[#EF4444]"
                      : "",
                    badge.variant === "info"
                      ? "bg-[#EFF6FF] dark:bg-[#12b76a26] text-[#1D4ED8]"
                      : ""
                  )}
                >
                  {badge?.text}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavigations;
