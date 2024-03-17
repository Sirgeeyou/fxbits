import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themes } from "@/constants/constants";
import { useTheme } from "@/context/ThemeProvider";
import { SunMoon } from "lucide-react";
import Image from "next/image";

export function ThemeMenu() {
  const { mode, setMode } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SunMoon
          className={`mr-4  ${mode === "dark" ? "inverted-icon" : "normal-icon"}`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => {
              setMode(item.value);

              if (item.value !== "system") {
                localStorage.theme = item.value;
              } else {
                localStorage.removeItem("theme");
              }
            }}
          >
            <Image
              src={item.icon}
              alt={item.value}
              width={16}
              height={16}
              className={mode === "dark" ? "inverted-icon" : "normal-icon"}
            />
            <span className="ml-2 text-stone-600 dark:text-stone-300">
              {item.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
