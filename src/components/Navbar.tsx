"use client"

import React from "react"
import Link from "next/link"
import DarkModeToggle from "./ui/dark-mode-toggle"

const Navbar = () => {
  return (
    <div className="w-full p-4 border-b border-border flex justify-between items-center">
      <Link href={"/"} className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600" />
        <h2 className="text-2xl font-sans font-bold tracking-tight">
          KeneThink
        </h2>
      </Link>
      <DarkModeToggle />
    </div>
  )
}

export default Navbar
