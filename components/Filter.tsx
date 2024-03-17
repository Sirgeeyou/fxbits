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
import { formUrlQuery } from "@/lib/utils";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleUpdateParams(value: string) {
    console.log(value);
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "filter",
      value,
    });

    router.push(newUrl, { scroll: false });
  }

  return (
    <Select onValueChange={(value) => handleUpdateParams(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" className="text-muted-foreground" />
      </SelectTrigger>
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
