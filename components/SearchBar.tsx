"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/signup-form";
import { cn } from "@/utils/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const route = "/";

  const query = searchParams.get("q");

  const [search, setSearch] = useState(query || "");

  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        if (search) {
          const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "q",
            value: search,
          });

          console.log("newurl", newUrl);
          router.push(newUrl, { scroll: false });
        } else {
          if (pathname === route) {
            const newUrl = removeKeysFromQuery({
              params: searchParams.toString(),
              keysToRemove: ["q"],
            });

            router.push(newUrl, { scroll: false });
          }
        }
      }, 250);
      return () => clearTimeout(delayDebounceFn);
    },
    [search, pathname, router, searchParams, query]
  );

  return (
    <LabelInputContainer>
      <Label
        htmlFor="firstname"
        className="text-muted-foreground dark:text-muted-foreground"
      >
        First name
      </Label>
      <Input
        placeholder="Search..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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
