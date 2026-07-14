"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-4 font-semibold transition-all duration-300";

  const primary =
    "bg-green-600 text-white hover:bg-green-700 hover:-translate-y-1 shadow-lg";

  const secondary =
    "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white";

  return (
    <Link
      href={href}
      className={`${base} ${
        variant === "primary" ? primary : secondary
      }`}
    >
      {children}
    </Link>
  );
}