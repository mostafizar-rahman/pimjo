"use client";
import { PiCube, PiDashboard } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ToggleContext } from "@/providers/dashboardToggleProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const NavList = [
  {
    id: 1,
    href: "/dashboard",
    label: "Dashboard",
    icon: <PiDashboard />,
  },
  {
    id: 2,
    href: "/dashboard/products",
    label: "Products",
    icon: <PiCube className={"w-4 h-[18px]"} />,
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const { isSidebarShow, setIsSidebarShow } = useContext(ToggleContext);
  return (
    <>
      <div
        className={cn(
          "bg-gray-900-dash fixed w-full h-screen z-40 transition-all duration-300",
          isSidebarShow ? "opacity-50 visible" : "opacity-0 invisible"
        )}
      ></div>
      <div
        className={cn(
          "px-5 lg:pt-8 pb-5 pt-5 border-r border-r-border-dash bg-primary h-screen xl:sticky xl:top-0 fixed top-[78px] z-50 transition-all duration-500",
          isSidebarShow ? "left-0 w-[300px]" : "-left-full"
        )}
      >
        <Link href={"/"} className="hidden md:block">
          <Image
            width={121}
            height={28}
            src={"/images/logo.png"}
            alt="logo"
            className="sm:w-auto w-[103px]"
          />
        </Link>
        <div className="md:pt-7 pt-5">
          <p className="uppercase leading-[166.667%] text-gray-200-dash text-sm">
            Menu
          </p>
          <ul className="mt-4 space-y-1">
            {NavList.map(({ href, icon, id, label }) => {
              return (
                <li key={id}>
                  <Link
                    href={href}
                    className={cn(
                      "py-2 px-3 rounded-lg text-sm font-medium  hover:text-secondary hover:bg-[#ECF3FF] hover:dark:bg-[#465FFF1F] transition-all duration-500 flex items-center gap-3",
                      pathName === href ? "text-secondary bg-[#ECF3FF] dark:bg-[#465FFF1F]" : ""
                    )}
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      {icon}
                    </span>
                    <span className=" leading-[142.857%]">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
