"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/signup-form";
import { cn } from "@/utils/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("TEST");

  return (
    <LabelInputContainer>
      <Label htmlFor="firstname">First name</Label>
      <Input id="firstname" placeholder="Tyler" type="text" />
    </LabelInputContainer>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
