import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active dark:bg-primary-dark dark:text-primary-dark-foreground dark:hover:bg-primary-dark-hover dark:active:bg-primary-dark-active",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:bg-primary-active active:bg-primary-active dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-dark-foreground dark:active:bg-primary-dark-active",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent-active dark:hover:bg-accent-dark dark:hover:text-accent-dark-foreground dark:active:bg-accent-dark-active",
        link: "text-primary underline-offset-4 hover:underline active:text-primary-active dark:text-primary-dark dark:active:text-primary-dark-active",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-active dark:bg-secondary-dark dark:text-secondary-dark-foreground dark:hover:bg-secondary-dark-hover dark:active:bg-secondary-dark-active",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-hover active:bg-destructive-active dark:bg-destructive-dark dark:text-destructive-dark-foreground dark:hover:bg-destructive-dark-hover dark:active:bg-destructive-dark-active",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 py-7",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
