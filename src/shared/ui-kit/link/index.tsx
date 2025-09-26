import { cn } from "@/lib/utils";
import { useRouter } from "@tanstack/react-router";
import type { DetailedHTMLProps, ReactNode } from "react";

interface AppLinkProps {
  props?: DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >;
  children?: ReactNode;
}

export const AppLink = ({ props, children }: AppLinkProps) => {
  const router = useRouter();

  const handleGo = () => {
    router.navigate({ to: props?.href });

    if (props?.href) {
      const element = document.getElementById(props.href as string);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <a
      onClick={handleGo}
      className="relative inline-block group cursor-pointer"
    >
      <span
        className={cn(
          "text-[16px] text-white relative inline-block overflow-hidden",
          props?.className
        )}
      >
        <span className="relative z-10">{children}</span>
        <span
          className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 w-0 group-hover:w-full`}
        ></span>
      </span>
    </a>
  );
};
