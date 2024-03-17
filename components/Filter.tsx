"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { categories } from "@/constants/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleUpdateParams(value: string) {
    if (value === "all") {
      const newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value,
      });
      router.push(newUrl, { scroll: false });
    }
  }

  return (
    <Select onValueChange={(value) => handleUpdateParams(value)}>
      <div className="text-stone-800 dark:text-stone-100">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
      </div>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem key={category.value} value={category.value}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
