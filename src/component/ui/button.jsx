import { cn, Slot } from "@/lib/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium tracking-[-0.2px] transition-all duration-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary border border-border text-foreground hover:primary/80",
        outline:
          "border border-border bg-transparent hover:bg-secondary hover:text-primary",
        secondary: "bg-secondary text-primary hover:bg-secondary/80",
      },
      size: {
        default: "max-h-11 px-4 py-2.5",
        lg: "max-h-10 px-[14px] py-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({
  children,
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;
