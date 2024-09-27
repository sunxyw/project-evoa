import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface HighlightProps
  extends PropsWithChildren<{
    className?: string;
  }> {}

const Highlight = ({ children, className }: HighlightProps) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};

export { Highlight };
