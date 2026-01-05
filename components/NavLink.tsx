"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  activeClassName?: string;
  pendingClassName?: string;
  to?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, href, ...props }, ref) => {
    const pathname = usePathname();
    const target = to || href || "";
    // exact match for / and activeClassName
    // usually active if pathname === target
    // but for nested routes?
    // Let's assume strict match for now as per `Header.tsx` logic seemed to be `location.pathname === link.path`.
    const isActive = pathname === target;

    return (
      <Link
        ref={ref}
        href={target}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
