"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select";
import { PiGlobe, PiUser } from "@/lib/icons";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const TopHeder = () => {
  const { data: session, status } = useSession();

  return (
    <div className="bg-gray-900 sm:py-3.5 py-3">
      <div className="container">
        <div className="flex sm:flex-row flex-col-reverse justify-between items-center gap-y-2">
          <div className="flex items-center gap-5">
            <div>
              <Select>
                <SelectTrigger className={"w-[89px]"}>
                  <PiGlobe className={"shrink-0"} />
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value="USD">
                <SelectTrigger className={"w-[67px]"}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">
                    <span className="flex items-center gap-2">
                      <Image
                        width={14}
                        height={14}
                        src={"/images/us-flag.png"}
                        alt="img"
                        className={"shrink-0"}
                      />
                      USD
                    </span>
                  </SelectItem>
                  <SelectItem value="euro">
                    <span className="flex items-center gap-2">
                      <Image
                        width={14}
                        height={14}
                        src={"/images/france.png"}
                        alt="img"
                        className={"shrink-0"}
                      />
                      EURO
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-primary dark:text-foreground leading-[143%] tracking-[-0.2px] text-sm">
            Flash Sale Live – <strong className="font-medium">30% Off</strong>{" "}
            Everything
          </p>
          <div className="hidden md:flex items-center gap-1 text-primary dark:text-foreground leading-[143%] tracking-[-0.2px] text-sm">
            {session ? (
              <Link
                href={"/dashboard"}
                className="hover:text-secondary transition-all duration-500"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <PiUser className={"size-4"} />
                <Link
                  href={"/login"}
                  className="hover:text-secondary transition-all duration-500"
                >
                  login
                </Link>
                /
                <Link
                  href={"/register"}
                  className="hover:text-secondary transition-all duration-500"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeder;
