"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

import { User } from "@/types/types";
import { CircleUserRound, Home } from "lucide-react";

type NavbarProps = {
  user: User | null;
};

export default function Navbar({ user }: NavbarProps): React.JSX.Element {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className=" text-neutral-400 dark:text-white" />,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: <CircleUserRound className="text-neutral-400 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} user={user} />
    </div>
  );
}
