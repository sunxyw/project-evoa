import { cn } from "@/lib/utils";
import { Root as SeparatorPrimitiveRoot } from "@radix-ui/react-separator";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";

const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitiveRoot>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitiveRoot
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitiveRoot.displayName;

export { Separator };
