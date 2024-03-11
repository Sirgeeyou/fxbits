import { FilterOptions, IThemes } from "@/types/types";

const categories: FilterOptions[] = [
  {
    name: "Shoes",
    value: "shoes",
  },
  { name: "Supplements", value: "supplements" },
  { name: "Cats", value: "cats" },
  { name: "Cars", value: "cars" },
];

export const themes: IThemes[] = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  {
    value: "system",
    label: "System",
    icon: "/assets/icons/computer.svg",
  },
];

export const FILTER_SEARCH_PARAMS_KEY = "filter";
export { categories };
