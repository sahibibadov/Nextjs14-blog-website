// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RxMoon, RxSun } from "react-icons/rx";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleThem = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button
      isIconOnly
      className="rounded-full"
      onClick={toggleThem}
      variant="flat"
    >
      <RxSun className="absolute w-[1.2rem] h-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
      <RxMoon className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  );
}
