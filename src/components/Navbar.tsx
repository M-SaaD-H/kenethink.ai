"use client"

import React from "react"
import Link from "next/link"
import DarkModeToggle from "./ui/dark-mode-toggle"
import { IconReport, IconRotate, IconX } from "@tabler/icons-react"
import { Button } from "./ui/button"
import { AnimatePresence, motion } from "motion/react"

interface NavbarProps {
  onReportClick: () => void;
  isReportOpen: boolean;
  onRefresh: () => void;
}

const Navbar = ({ onReportClick, isReportOpen, onRefresh }: NavbarProps) => {
  return (
    <div className="h-17 w-full relative">
      <motion.div
        initial={false}
        animate={{
          maxWidth: isReportOpen ? "80rem" : "56rem" // 4xl = 56rem & 7xl = 80rem
        }}
        className="w-full max-w-4xl p-4 bg-background border-b border-border flex justify-between items-center fixed top-0 z-50"
      >
        <Link href={"/"} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600" />
          <h2 className="text-2xl font-sans font-bold tracking-tight">
            KeneThink
          </h2>
        </Link>
        <div className="flex gap-2 items-center">
          <Button size={"icon"} variant={"secondary"} className="rounded-full" onClick={onRefresh}>
            <IconRotate size={20} />
          </Button>
          <DarkModeToggle />
          <Button
            size={"icon"}
            variant={"secondary"}
            className="rounded-full p-2"
            onClick={onReportClick}
          >
            <AnimatePresence mode="wait" initial={false}>
              {
                isReportOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconX size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="report"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconReport size={20} />
                  </motion.div>
                )
              }
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
