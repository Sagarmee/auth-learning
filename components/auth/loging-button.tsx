"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode; // type name
  mode?: "modal" | "redirect"; // ternary modal or redirect
  asChild?: boolean; // boolean true or false
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onclick = () => {
    router.push("/auth/login");
  };

  if (mode == "modal") {
    return <span>open model</span>;
  }

  return <span onClick={onclick}>{children}</span>;
};
