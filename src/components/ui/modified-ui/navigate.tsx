"use client";

import { Button, ButtonProps } from "../button";
import Link from "next/link";
import { removeHash } from "@/utils/removeHash";

interface Props extends ButtonProps {
  to: string;
  children: React.ReactNode;
}

export default function Navigate({ children, to, ...props }: Props) {
  return (
    <Link href={to} onClick={removeHash} shallow className="inline-flex">
      <Button
        aria-label="Get to know"
        type="button"
        className="text-xs transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_12px_12px_hsl(0,0%,100%,0.08)] active:scale-95 active:bg-gray-100"
        {...props}
      >
        {children}
      </Button>
    </Link>
  );
}
