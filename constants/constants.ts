import { FilterOptions } from "@/types/types";

const categories: FilterOptions[] = [
  {
    name: "Shoes",
    value: "shoes",
  },
  { name: "Supplements", value: "supplements" },
  { name: "Cats", value: "cats" },
  { name: "Cars", value: "cars" },
];

export const FILTER_SEARCH_PARAMS_KEY = "filter";
export { categories };
