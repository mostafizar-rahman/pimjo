"use client";
import { PiArrowDown, PiExit, PiInfo, PiUser } from "@/lib/icons";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ProfileDropdown = () => {
  const [showUserPlan, setShowUserPlan] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowUserPlan(!showUserPlan);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserPlan(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // user sing out functionlity
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-gray-200-dash flex items-center justify-center">
          <Image
            width={40}
            height={40}
            src={"/images/user.png"}
            alt="user"
            className="rounded-full"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-text-color-dash text-sm font-medium leading-[142.857%]">
            {session?.user?.name || "Emirhan Boruch"}
          </span>
          <span
            className={`w-[18px] h-[18px] flex justify-center items-center transition-transform duration-200 ${
              showUserPlan ? "rotate-180" : ""
            }`}
          >
            <PiArrowDown className="text-text-secondary-dash" />
          </span>
        </div>
      </div>

      {showUserPlan && (
        <div className="absolute top-[60px] right-0 w-[260px] bg-card-background-dash dark:bg-[#1A2231] rounded-2xl p-3 border border-border-dash shadow-[0_12px_16px_-4px_rgba(16,24,40,0.08),_0_4px_6px_-2px_rgba(16,24,40,0.03)] z-50">
          <div>
            <p className="text-sm font-medium text-text-color-dash leading-[142.857%]">
              {session?.user?.name || "Emirhan Boruch"}
            </p>
            <span className="text-xs text-text-secondary-dash">
              {session?.user?.email || "emirhanboruch51@gmail.com"}
            </span>
          </div>
          <ul className="mt-4 space-y-1">
            <li className="py-2 px-3 rounded-lg flex items-center gap-3 hover:bg-[#F9FAFB] transition-all duration-500 cursor-pointer group">
              <span className="flex items-center justify-center w-6 h-6 text-text-secondary-dash group-hover:text-text-color-dash transition-all duration-500">
                <PiUser />
              </span>
              <p className="text-sm font-medium text-text-color-dash leading-[142.857%]">
                Edit profile
              </p>
            </li>
            <li className="py-2 px-3 rounded-lg flex items-center gap-3 hover:bg-[#F9FAFB] transition-all duration-500 cursor-pointer group">
              <span className="flex items-center justify-center w-6 h-6 text-text-secondary-dash group-hover:text-text-color-dash transition-all duration-500">
                <PiUser />
              </span>
              <p className="text-sm font-medium text-text-color-dash leading-[142.857%]">
                Account settings
              </p>
            </li>
            <li className="py-2 px-3 rounded-lg flex items-center gap-3 hover:bg-[#F9FAFB] transition-all duration-500 cursor-pointer group">
              <span className="flex items-center justify-center w-6 h-6 text-text-secondary-dash group-hover:text-text-color-dash transition-all duration-500">
                <PiInfo />
              </span>
              <p className="text-sm font-medium text-text-color-dash leading-[142.857%]">
                Support
              </p>
            </li>
            <span className="block w-full border-b border-b-border-dash my-3"></span>
            <li
              onClick={() => signOut({ callbackUrl: "/" })}
              className="py-2 px-3 rounded-lg flex items-center gap-3 hover:bg-[#F9FAFB] transition-all duration-500 cursor-pointer group"
            >
              <span className="flex items-center justify-center w-6 h-6 text-text-secondary-dash group-hover:text-text-color-dash transition-all duration-500">
                <PiExit />
              </span>
              <p className="text-sm font-medium text-text-color-dash leading-[142.857%]">
                Sign out
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
