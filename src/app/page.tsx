"use client"

import React, { useEffect, useState } from "react";
import AddConsideration from "@/components/AddConsideration";
import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import Report from "@/components/Report";
import { AnimatePresence, motion } from "motion/react";
import { checkDevice, cn } from "@/lib/utils";

export default function Home() {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(checkDevice());
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{
        maxWidth: isReportOpen ? "80rem" : "56rem"
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut"
      }}
      className="w-full mx-auto h-screen overflow-hidden"
      style={{ willChange: "max-width" }}
    >
      <Navbar onReportClick={() => setIsReportOpen(!isReportOpen)} isReportOpen={isReportOpen} />
      <div className="flex gap-4 justify-between h-full w-full relative">
        <motion.div
          initial={false}
          animate={{
            maxWidth: isReportOpen ? "48rem" : "56rem" // 3xl = 48rem & 4xl = 56rem
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut"
          }}
          className="h-full w-full max-w-4xl"
          style={{ willChange: "max-width" }}
        >
          <Chat />
          <AddConsideration isReportOpen={isReportOpen} />
        </motion.div>
        <AnimatePresence>
          {
            isReportOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: isDesktop ? 20 : 0,
                  y: isDesktop ? 0 : 20
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  x: isDesktop ? 20 : 0,
                  y: isDesktop ? 0 : 20
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}
                className={cn(
                  "h-screen flex-1",
                  !isDesktop && "absolute inset-0 bg-background"
                )}
                style={{ willChange: "transform, opacity" }}
              >
                <Report />
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </motion.div>
  )
}