"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage } from "@tabler/icons-react";
import { User } from "@/types/types";

type NavbarProps = {
  user: User | null;
};

export default function Navbar({ user }: NavbarProps): React.JSX.Element {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="size-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: <IconMessage className="size-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} user={user} />
    </div>
  );
}
