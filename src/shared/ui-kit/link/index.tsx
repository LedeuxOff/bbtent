import { cn } from "@/lib/utils";
import type { DetailedHTMLProps, ReactNode } from "react";

interface AppLinkProps {
  props?: DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  children?: ReactNode;
}

export const AppLink = ({ props, children }: AppLinkProps) => {
  return (
    <a {...props} className={cn("", props?.className)}>
      {children}
    </a>
  );
};
