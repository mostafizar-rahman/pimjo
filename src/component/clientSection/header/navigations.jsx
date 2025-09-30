import { cn } from "@/lib/utils";
import Link from "next/link";

const Navigations = ({ navItems }) => {
  return (
    <nav className="lg:block hidden">
      <ul className="flex items-center gap-7">
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
                  badge.variant === "info" ? "bg-[#EFF6FF] dark:bg-[#12b76a26] text-[#1D4ED8]" : ""
                )}
              >
                {badge?.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigations;
