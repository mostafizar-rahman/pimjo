"use client";
import Input from "@/component/ui/input";
import { PiMenuDash, PiMoon, PiSearch, PiThreeDot } from "@/lib/icons";
import { ToggleContext } from "@/providers/dashboardToggleProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import NotificationsDropdown from "./notificationsDropdown";
import ProfileDropdown from "./profileDropdown";

const Header = () => {
  const { isSidebarShow, setIsSidebarShow } = useContext(ToggleContext);
  return (
    <div className="lg:px-6 px-4 py-4 border-b border-b-border-dash bg-primary">
      <div className="flex justify-between items-center relative">
        {/* left side search and sidebar  */}
        <div className="flex items-center gap-4 max-w-[490px] w-full">
          <button
            onClick={() => setIsSidebarShow(true)}
            aria-label="menu"
            className="w-11 h-11 shrink-0 flex justify-center items-center border border-border-dash rounded-lg text-gray-100-dash"
          >
            <PiMenuDash />
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
        <button className="w-10 h-10 flex justify-center items-center md:hidden">
          <PiThreeDot className={"rotate-90"} />
        </button>

        {/* right side moon, notifications, profile  */}
        <div className="flex items-center justify-end gap-4 w-full bg-primary">
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
