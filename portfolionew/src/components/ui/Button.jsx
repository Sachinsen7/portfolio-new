import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background glass",
  {
    variants: {
      variant: {
        default: "bg-primary/20 text-primary-foreground hover:bg-primary/30 backdrop-blur",
        destructive: "bg-destructive/20 text-destructive-foreground hover:bg-destructive/30 backdrop-blur",
        outline: "border border-glass bg-transparent hover:bg-glass-gradient",
        secondary: "bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 backdrop-blur",
        ghost: "bg-transparent hover:bg-glass-gradient",
        link: "underline-offset-4 hover:underline text-primary bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-full",
        lg: "h-11 px-8 rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };