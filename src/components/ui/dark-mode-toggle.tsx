"use client"

import React from "react"
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes"
import { Button } from "./button"

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size={"icon"}
      variant={"secondary"}
      className="relative rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IconMoon size={19} className="rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all duration-200 absolute left-1/2 top-1/2 -translate-1/2" />
      <IconSun size={19} className="rotate-90 scale-0 dark:rotate-0 dark:scale-90 transition-all duration-200 absolute left-1/2 top-1/2 -translate-1/2" />
    </Button>
  )
}

export default DarkModeToggle