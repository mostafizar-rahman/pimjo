import { PiHeart, PiSearch } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import CartSidebar from "./cartSidebar";
import MobileNavigations from "./mobileNavigations";
import Navigations from "./navigations";
import TopHeder from "./topHeder";
import UserProfile from "./userProfile";

const navItems = [
  {
    label: "Deals of the Week",
    href: "/deals",
    badge: { text: "Hot", variant: "danger" },
  },
  {
    label: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    label: "Men",
    href: "/men",
  },
  {
    label: "Women",
    href: "/women",
  },
  {
    label: "Kids",
    href: "/kids",
  },
  {
    label: "Sale",
    href: "/sale",
    badge: { text: "20% OFF", variant: "info" },
  },
];

const Header = () => {
  return (
    <>
      <TopHeder />
      <header className="bg-primary py-[26px] border-b border-b-[#E5E7EB] dark:border-b-[#252a36] max-h-20">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[22px]">
              <MobileNavigations navItems={navItems} />
              <Link href={"/"}>
                <Image
                  width={121}
                  height={28}
                  src={"/images/logo.png"}
                  alt="logo"
                  className="sm:w-auto w-[103px]"
                />
              </Link>
            </div>
            <Navigations navItems={navItems} />
            <div className="flex items-center gap-3">
              <div className="text-gray-700 cursor-pointer w-6 h-6 flex justify-center items-center">
                <PiSearch />
              </div>
              <UserProfile />
              <div className="text-gray-700 cursor-pointer w-6 h-6 flex justify-center items-center relative">
                <PiHeart />
                <div className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] border border-primary rounded-2xl bg-[#1D4ED8] text-center flex justify-center items-center text-[10px] font-medium text-primary tracking-[-0.2px]">
                  2
                </div>
              </div>
              <CartSidebar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
