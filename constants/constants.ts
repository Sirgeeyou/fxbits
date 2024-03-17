import { FilterOptions, IThemes } from "@/types/types";

const categories: FilterOptions[] = [
  { name: "All", value: "all" },
  {
    name: "Cabins",
    value: "cabins",
  },
  { name: "Mansions", value: "mansions" },
  { name: "Cottages", value: "cottages" },
  { name: "Mobile", value: "mobile" },
  { name: "Modern", value: "modern" },
  { name: "Lodge", value: "lodge" },
  { name: "Chalet", value: "chalet" },
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
