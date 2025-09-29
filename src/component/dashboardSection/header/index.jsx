"use client";
import Input from "@/component/ui/input";
import {
  PiCloseDash,
  PiMenuDash,
  PiMoon,
  PiSearch,
  PiSun,
  PiThreeDot,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ToggleContext } from "@/providers/dashboardToggleProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import NotificationsDropdown from "./notificationsDropdown";
import ProfileDropdown from "./profileDropdown";

const Header = () => {
  const { isSidebarShow, setIsSidebarShow } = useContext(ToggleContext);
  const [userActionsShow, setUserActionsShow] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleMoodToggler = () => {
    if (isDark) {
      setIsDark(false);
      document.querySelector("body").classList.remove("dark");
    } else {
      setIsDark(true);
      document.querySelector("body").classList.add("dark");
    }
  };
  return (
    <div className="sticky top-0 z-50">
      <div className="lg:px-6 px-3 py-4 border-b border-b-border-dash bg-primary">
        <div className="flex justify-between items-center relative">
          {/* left side search and sidebar  */}
          <div className="flex items-center gap-4 max-w-[490px] md:w-full">
            <button
              onClick={() => setIsSidebarShow(!isSidebarShow)}
              aria-label="menu"
              className={cn(
                "w-11 h-11 shrink-0 flex justify-center items-center rounded-lg text-gray-100-dash",
                isSidebarShow ? "bg-gray-300-dash" : "border border-border-dash"
              )}
            >
              {isSidebarShow ? <PiCloseDash /> : <PiMenuDash />}
            </button>
            <div className="relative w-full md:block hidden">
              <span className="text-gray-100-dash absolute left-4 top-1/2 -translate-y-1/2">
                <PiSearch />
              </span>
              <Input
                placeholder={"Search or type command..."}
                className={"pl-12 w-full rounded-lg"}
              />
              <div className="w-[38px] h-[27px] text-xs text-gray-100-dash tracking-[-0.2px] flex justify-center items-center text-center border border-border-dash rounded-lg absolute right-2.5 top-1/2 -translate-y-1/2">
                ⌘ K
              </div>
            </div>
          </div>

          {/* center logo, and three dot icon for small divices */}
          <Link href={"/"} className="md:hidden block">
            <Image
              width={104}
              height={24}
              src={"/images/logo.png"}
              alt="logo"
              className="w-[103px]"
            />
          </Link>
          <button
            onClick={() => setUserActionsShow(!userActionsShow)}
            className={cn(
              "w-10 h-10 flex justify-center items-center rounded-lg md:hidden",
              userActionsShow ? "bg-gray-300-dash" : ""
            )}
          >
            <PiThreeDot className={"rotate-90"} />
          </button>

          {/* right side moon, notifications, profile  */}
          <div className="hidden md:flex items-center justify-end gap-4 w-full">
            <div className="flex items-center gap-3">
              <button
                onClick={handleMoodToggler}
                className="text-gray-100-dash rounded-full border border-border-dash w-11 h-11 flex justify-center items-center"
              >
                {isDark ? <PiSun /> : <PiMoon />}
              </button>
              <NotificationsDropdown />
            </div>
            <div>
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </div>
      {/* right side moon, notifications, profile  for small divices*/}
      <div className="md:hidden">
        <div
          className={cn(
            "items-center justify-between gap-4 w-full bg-primary px-5 py-4 shadow-[0_4px_8px_-2px_rgba(16,24,40,0.10),_0_2px_4px_-2px_rgba(16,24,40,0.06)] absolute",
            userActionsShow ? "flex " : "hidden "
          )}
        >
          <div className="flex items-center gap-3">
            <button className="text-gray-100-dash rounded-full border border-border-dash w-11 h-11 flex justify-center items-center">
              <PiMoon />
            </button>
            <NotificationsDropdown />
          </div>
          <div>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
