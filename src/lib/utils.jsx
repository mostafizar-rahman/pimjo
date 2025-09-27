import { clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}


export const Slot = React.forwardRef(({ children, ...props }, ref) => {
    if (React.isValidElement(children)) {
        return React.cloneElement(children, {
            ...children.props, // keep child’s own props
            ...props,          // allow parent props to override
            className: cn(children.props.className, props.className),
            ref,
        });
    }

    return (
        <span ref={ref} {...props}>
            {children}
        </span>
    );
});

Slot.displayName = "Slot";