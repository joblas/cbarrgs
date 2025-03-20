"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const hoverLinkVariants = cva(
  "inline-flex items-center relative font-medium transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "text-foreground hover:text-primary",
        primary: "text-primary hover:text-primary/80",
        secondary: "text-muted-foreground hover:text-foreground",
        accent: "text-accent-foreground hover:text-accent-foreground/80",
        dark: "text-dark hover:text-black",
        underlined: [
          "relative after:absolute after:bottom-0 after:left-0",
          "after:w-full after:h-[1px] after:bg-current",
          "after:origin-bottom-right after:scale-x-0",
          "hover:after:origin-bottom-left hover:after:scale-x-100",
          "after:transition-transform after:duration-300"
        ],
        spotify: [
          "text-gray-800 hover:text-green-500",
          "relative after:absolute after:bottom-0 after:left-0",
          "after:w-full after:h-[1px] after:bg-green-500",
          "after:origin-bottom-right after:scale-x-0",
          "hover:after:origin-bottom-left hover:after:scale-x-100",
          "after:transition-transform after:duration-300"
        ]
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface HoverLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof hoverLinkVariants> {
  href: string;
  external?: boolean;
}

const HoverLink = React.forwardRef<HTMLAnchorElement, HoverLinkProps>(
  ({ className, variant, size, href, external = false, children, ...props }, ref) => {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    if (href.startsWith("http") || external) {
      return (
        <a
          href={href}
          className={cn(hoverLinkVariants({ variant, size, className }))}
          ref={ref}
          {...linkProps}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(hoverLinkVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
HoverLink.displayName = "HoverLink";

export { HoverLink, hoverLinkVariants };
