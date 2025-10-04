"use client";
import { PiCube, PiDashboard, PiLogo } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { ToggleContext } from "@/providers/dashboardToggleProvider";
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
    icon: <PiCube />,
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  const { isSidebarShow, setIsSidebarShow } = useContext(ToggleContext);
  return (
    <>
      <div
        onClick={() => setIsSidebarShow(false)}
        className={cn(
          "bg-[#101828] fixed w-full h-screen z-40 transition-all duration-300",
          isSidebarShow ? "opacity-50 visible" : "opacity-0 invisible"
        )}
      ></div>
      <aside
        className={cn(
          "px-5 lg:pt-8 pb-5 pt-5 border-r border-r-border-dash bg-body-primary-dash h-screen xl:sticky xl:top-0 fixed top-[78px] z-50 transition-all duration-500",
          isSidebarShow ? "left-0 w-[300px]" : "-left-full"
        )}
      >
        <Link
          href={"/"}
          className="hidden md:block text-[#232939] dark:text-white"
        >
          <PiLogo />
        </Link>
        <div className="md:pt-7 pt-5">
          <p className="uppercase leading-sm text-text-gray-400-dash text-xs font-outfit">
            Menu
          </p>
          <ul className="mt-4 space-y-1">
            {NavList.map(({ href, icon, id, label }) => {
              return (
                <li key={id}>
                  <Link
                    href={href}
                    className={cn(
                      "py-2 px-3 rounded-lg text-sm font-medium leading-sm transition-all duration-500 flex items-center gap-3",
                      pathName === href
                        ? "text-secondary bg-[#ECF3FF] dark:bg-[#465FFF1F]"
                        : "text-text-color-dash hover:text-secondary hover:bg-[#ECF3FF] hover:dark:bg-[#465FFF1F] hover:[&_svg]:text-secondary [&_svg]:text-text-secondary-dash"
                    )}
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      {icon}
                    </span>
                    <span>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
