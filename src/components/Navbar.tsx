"use client"

import React from "react"
import Link from "next/link"
import DarkModeToggle from "./ui/dark-mode-toggle"

const Navbar = () => {
  return (
    <div className="h-17 relative">
      <div className="max-w-4xl w-full p-4 bg-background border-b border-border flex justify-between items-center fixed top-0">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600" />
          <h2 className="text-2xl font-sans font-bold tracking-tight">
            KeneThink
          </h2>
        </Link>
        <DarkModeToggle />
      </div>
    </div>
  )
}

export default Navbar
