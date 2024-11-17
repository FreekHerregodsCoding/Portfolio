import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 rounded-lg border border-white/10 focus:border-white/50 font-light bg-custom-bg-color-button-active px-4 py-5 text-base placeholder:text-white/50 outline-none text-white/90",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
