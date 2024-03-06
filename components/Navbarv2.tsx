"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function FloatingNavDemo({ user }) {
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
