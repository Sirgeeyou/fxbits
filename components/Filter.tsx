"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FILTER_SEARCH_PARAMS_KEY, categories } from "@/constants/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery } from "@/lib/utils";

const paramFilter = FILTER_SEARCH_PARAMS_KEY;

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
    <Select
      onValueChange={(value) => handleUpdateParams(value)}
      defaultValue={paramFilter || undefined}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
