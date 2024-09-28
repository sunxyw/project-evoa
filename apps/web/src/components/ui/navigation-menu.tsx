import {
  Content as NavigationMenuPrimitiveContent,
  Indicator as NavigationMenuPrimitiveIndicator,
  Item as NavigationMenuPrimitiveItem,
  Link as NavigationMenuPrimitiveLink,
  List as NavigationMenuPrimitiveList,
  Root as NavigationMenuPrimitiveRoot,
  Trigger as NavigationMenuPrimitiveTrigger,
  Viewport as NavigationMenuPrimitiveViewport,
} from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/ui";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";

const NavigationMenu = forwardRef<
  ElementRef<typeof NavigationMenuPrimitiveRoot>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveRoot>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitiveRoot
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitiveRoot>
));
NavigationMenu.displayName = NavigationMenuPrimitiveRoot.displayName;

const NavigationMenuList = forwardRef<
  ElementRef<typeof NavigationMenuPrimitiveList>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveList>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitiveList
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitiveList.displayName;

const NavigationMenuItem = NavigationMenuPrimitiveItem;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = forwardRef<
  ElementRef<typeof NavigationMenuPrimitiveTrigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveTrigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitiveTrigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitiveTrigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitiveTrigger.displayName;

const NavigationMenuContent = forwardRef<
  ElementRef<typeof NavigationMenuPrimitiveContent>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveContent>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitiveContent
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitiveContent.displayName;

const NavigationMenuLink = NavigationMenuPrimitiveLink;

const NavigationMenuViewport = forwardRef<
  ElementRef<typeof NavigationMenuPrimitiveViewport>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveViewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "translate-x-[-25%] absolute left-0 top-full flex justify-center",
    )}
  >
    <NavigationMenuPrimitiveViewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitiveViewport.displayName;

const NavigationMenuIndicator = forwardRef<
  ElementRef<typeof NavigationMenuPrimitiveIndicator>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitiveIndicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitiveIndicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitiveIndicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitiveIndicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
