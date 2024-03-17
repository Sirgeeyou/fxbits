import { FilterOptions, IThemes } from "@/types/types";

const categories: FilterOptions[] = [
  { name: "All", value: "all" },
  {
    name: "Cabins",
    value: "cabins",
  },
  { name: "Chalet", value: "chalet" },
  { name: "Condo", value: "condo" },
  { name: "Cottages", value: "cottages" },
  { name: "Countryside", value: "countryside" },
  { name: "Lodge", value: "lodge" },
  { name: "Mansions", value: "mansions" },
  { name: "Mobile", value: "mobile" },
  { name: "Modern", value: "modern" },
];
export const listingCategories: FilterOptions[] = [
  {
    name: "Cabins",
    value: "cabins",
  },
  { name: "Chalet", value: "chalet" },
  { name: "Cottages", value: "cottages" },
  { name: "Condo", value: "condo" },
  { name: "Countryside", value: "countryside" },
  { name: "Lodge", value: "lodge" },
  { name: "Mansions", value: "mansions" },
  { name: "Mobile", value: "mobile" },
  { name: "Modern", value: "modern" },
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
