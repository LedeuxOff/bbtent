import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps {
  props?: HTMLAttributes<HTMLDivElement>;
  children?: ReactNode;
}

export const AppContainer = ({ props, children }: ContainerProps) => (
  <div {...props} className={cn("w-full max-w-[1100px] p-4", props?.className)}>
    {children}
  </div>
);
