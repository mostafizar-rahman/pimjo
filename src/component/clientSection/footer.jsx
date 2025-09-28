import {
  PiFacebook,
  PiHeadPhone,
  PiInstagram,
  PiLinkedin,
  PiTwitter,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import Input from "../ui/input";

const clothingLinks = [
  {
    label: "Tops",
    href: "/tops",
  },
  {
    label: "Tops & Blouses",
    href: "/tops-and-blouses",
  },
  {
    label: "Dresses",
    href: "/dresses",
  },
  {
    label: "Outerwear",
    href: "/outerwear",
  },
  {
    label: "Accessories",
    href: "/accessories",
  },
  {
    label: "New Arrivals",
    href: "/new-arrivals",
  },
];

const shoesLinks = [
  {
    label: "Hills shoed",
    href: "/hills-shoed",
    badge: null,
  },
  {
    label: "Running Shoes",
    href: "/running-shoes",
    badge: null,
  },
  {
    label: "Sandals",
    href: "/sandals",
    badge: null,
  },
  {
    label: "Ballet Pumps",
    href: "/ballet-pumps",
    badge: null,
  },
  {
    label: "Slingback",
    href: "/slingback",
    badge: null,
  },
  {
    label: "Sale",
    href: "/sale",
    badge: { text: "Hot Item", variant: "danger" },
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="lg:py-[112px] py-16">
        <div className="container">
          <div className="xl:px-8">
            <div className="flex lg:flex-row flex-col justify-between gap-x-10 gap-y-11">
              <div className="max-w-[378px] shrink flex flex-col justify-between">
                <div>
                  <Link href={"#"}>
                    <Image
                      width={120}
                      height={28}
                      src={"/images/logo.png"}
                      alt="logo"
                    />
                  </Link>
                  <p className="mt-6 tracking-[-0.2px] text-gray-100">
                    TailGrids comes with all the essential UI components you
                    need to create beautiful websites based on Tailwind CSS.
                  </p>
                </div>
                <div className="mt-5">
                  <p className="tracking-[-0.2px] text-gray-100">
                    Follow us on
                  </p>
                  <ul className="mt-3 flex items-center gap-5">
                    <li>
                      <Link
                        href={"#"}
                        className="text-gray-200 hover:text-foreground transition-all duration-500"
                      >
                        <PiFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="text-gray-200 hover:text-foreground transition-all duration-500"
                      >
                        <PiTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="text-gray-200 hover:text-foreground transition-all duration-500"
                      >
                        <PiInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="text-gray-200 hover:text-foreground transition-all duration-500"
                      >
                        <PiLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-[744px] shrink-0 flex sm:flex-row flex-col flex-wrap lg:flex-nowrap justify-between xl:gap-x-20 gap-x-10 gap-y-11">
                <div className="shrink-0">
                  <h5 className="font-semibold text-xl tracking-[-0.2px] leading-[140%]">
                    Clothing
                  </h5>
                  <ul className="space-y-3 mt-6">
                    {clothingLinks.map(({ href, label }) => (
                      <li key={label} className="flex items-center gap-2">
                        <Link
                          href={href}
                          className="font-medium text-gray-100 tracking-[-0.2px] hover:text-secondary transition-all duration-500"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0">
                  <h5 className="font-semibold text-xl tracking-[-0.2px] leading-[140%]">
                    Shoes
                  </h5>
                  <ul className="space-y-3 mt-6">
                    {shoesLinks.map(({ href, label, badge }) => (
                      <li key={label} className="flex items-center gap-2">
                        <Link
                          href={href}
                          className="font-medium text-gray-100 tracking-[-0.2px] hover:text-secondary transition-all duration-500"
                        >
                          {label}
                        </Link>
                        {badge?.text && (
                          <span
                            className={cn(
                              "px-2 py-1 rounded-2xl text-xs font-medium tracking-[-0.2px] leading-[133.333%]",
                              badge.variant === "danger"
                                ? "bg-[#EF444426] text-[#EF4444]"
                                : ""
                            )}
                          >
                            {badge.text}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:max-w-[364px] shrink w-full">
                  <h5 className="font-semibold text-xl tracking-[-0.2px] leading-[140%]">
                    Newsletter
                  </h5>
                  <p className="text-gray-100 tracking-[-0.2px] mt-2">
                    Signup for latest news and insights from TailGrids
                  </p>
                  <form className="mt-8">
                    <Input placeholder={"Enter your email address"} required />
                    <Button variant={"secondary"} className={"mt-3 w-full"}>
                      Subscribe
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="bg-primary py-6 border-b border-b-background">
        <div className="container">
          <div className="xl:px-8">
            <div className="flex sm:flex-row flex-col justify-between items-center flex-wrap gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex justify-center items-center rounded-lg bg-background text-gray-700">
                  <PiHeadPhone />
                </div>
                <div>
                  <p className="text-gray-100 leading-[133.333%] text-xs tracking-[-0.2px] block">
                    8:30 AM - 10:30 PM
                  </p>
                  <a
                    href="tel:+16283998030"
                    className="text-sm font-semibold leading-[142.857%] block"
                  >
                    +16283998030
                  </a>
                </div>
              </div>
              <div className="flex xl:flex-row flex-col xl:items-center gap-3">
                <div>
                  <p className="font-semibold tracking-[-0.2px]">
                    Download Now on
                  </p>
                  <p className="text-xs tracking-[-0.2px] text-gray-100">
                    Free home delivery on your first purchase
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <Image
                    width={133}
                    height={40}
                    src={"/images/footer/app-store.png"}
                    alt="img"
                  />
                  <Image
                    width={133}
                    height={40}
                    src={"/images/footer/google-play.png"}
                    alt="img"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm mb-3 font-medium text-gray-100 leading-[143%]">
                  We Support
                </p>
                <Image
                  width={270}
                  height={20}
                  src={"/images/footer/pay.png"}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer copyright */}
      <div className="bg-primary py-5">
        <div className="container">
          <div className="xl:px-8">
            <div className="flex justify-between items-center">
              <p className="text-gray-100 tracking-[-0.2px]">
                © Copyright 2025 - TailGrids.
              </p>
              <ul className="flex items-center gap-8">
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-100 tracking-[-0.2px] hover:text-secondary transition-all duration-500"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-100 tracking-[-0.2px] hover:text-secondary transition-all duration-500"
                  >
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-gray-100 tracking-[-0.2px] hover:text-secondary transition-all duration-500"
                  >
                    Shipping policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
