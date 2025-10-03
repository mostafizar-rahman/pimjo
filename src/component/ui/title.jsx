import { cn, Slot } from "@/lib/utils";
import { cva } from "class-variance-authority";

const titleVariants = cva("font-semibold", {

  variants: {
    size: {
      "36": "text-[clamp(1.75rem,1.5543rem+0.8696vw,2.25rem)] leading-4xl",
      "48": "text-[clamp(2.25rem,1.9565rem+1.3043vw,3rem)] leading-5xl",
    },
  },
  defaultVariants: {
    size: "50",
  },
});


const Title = ({
  children,
  className,
  size,
  asChild = false,
}) => {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp className={cn(titleVariants({ size }), className)}>{children}</Comp>
  );
};

export default Title;
