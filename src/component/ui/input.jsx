import { cn } from "@/lib/utils";

const Input = ({ className, placeholder, type, id, ...props }) => {
  return (
    <input
      {...props}
      id={id}
      type={type}
      placeholder={placeholder}
      className={cn(
        "max-h-11 rounded-xl px-4 py-3 bg-primary border border-border w-full outline-gray-100 text-sm tracking-[-0.2px] leading-sm placeholder:text-[#9CA3AF]",
        className
      )}
    />
  );
};

export default Input;
