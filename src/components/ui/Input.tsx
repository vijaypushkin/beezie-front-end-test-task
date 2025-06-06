import { cn } from "@/utils/tailwind.utils";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isFullwidth?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, rightIcon, isFullwidth, className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center bg-gray-input border rounded-md text-white overflow-hidden",
          isFullwidth && "w-full",
          className
        )}
      >
        {icon && <div className="pl-3">{icon}</div>}
        <input
          ref={ref}
          className="flex-1 bg-transparent py-2 px-3 outline-none"
          {...props}
        />
        {rightIcon && (
          <div className=" border-l border-gray-border bg-(--bg-secondary)/20 h-full grid place-items-center w-15">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

/**
 * Since we are using a forwardRef, we need to set the displayName manually for React DevTools
 */
Input.displayName = "Input";

export { Input };
