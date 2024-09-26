import type { HTMLAttributes, PropsWithChildren } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export interface MovingBorderProps extends HTMLAttributes<HTMLDivElement> {
  rounded?: "sm" | "default" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
}

const MovingBorder = ({
  children,
  rounded,
  duration,
  containerClassName,
  borderClassName,
  className,
  ...otherProps
}: MovingBorderProps) => {
  const Comp = Slot;

  const roundedRadiusMap = {
    sm: "0.125rem",
    default: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  };
  const borderRadius = roundedRadiusMap[rounded ?? "default"];

  return (
    <div
      className={cn(
        "bg-transparent relative text-xl py-px px-[1.5px] overflow-hidden",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorderAnim duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(hsl(var(--primary))_40%,transparent_60%)]",
              borderClassName,
            )}
          />
        </MovingBorderAnim>
      </div>

      <Comp
        className={cn("backdrop-blur-xl", className)}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </Comp>
    </div>
  );
};

const MovingBorderAnim = ({
  children,
  duration = 2000,
  rx,
  ry,
}: PropsWithChildren<{
  duration?: number;
  rx?: string;
  ry?: string;
}>) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <title>Border</title>
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export { MovingBorder };
