"use client";
import { PiUser } from "@/lib/icons";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserProfile = () => {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };
  return (
    <>
      {session ? (
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-gray-700 cursor-pointer w-6 h-6 flex justify-center items-center"
          >
            <PiUser />
          </Link>
        </div>
      ) : (
        <Link
          href="/login"
          className="text-gray-700 cursor-pointer w-6 h-6 flex justify-center items-center"
        >
          <PiUser />
        </Link>
      )}
    </>
  );
};

export default UserProfile;
