"use client"

import React, { useState } from "react";
import AddConsideration from "@/components/AddConsideration";
import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{
        maxWidth: isReportOpen ? "80rem" : "56rem" // 4xl = 56rem & 7xl = 80rem
      }}
      transition={{ duration: 0.3 }}
      className="w-full mx-auto h-screen overflow-hidden"
    >
      <Navbar onReportClick={() => setIsReportOpen(!isReportOpen)} isReportOpen={isReportOpen} />
      <div className="flex gap-4 justify-between h-full w-full">
        <motion.div
          initial={false}
          animate={{
            maxWidth: isReportOpen ? "48rem" : "56rem" // 3xl = 48rem & 4xl = 56rem
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-full w-full max-w-4xl"
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
                  filter: "blur(15px)",
                  x: 30
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  x: 0
                }}
                exit={{
                  opacity: 0,
                  filter: "blur(15px)",
                  x: 30
                }}
                transition={{ duration: 0.2 }}
                className="h-screen flex-1"
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


const Report = () => (
  <div className="h-[88%] w-full my-4">
    <h3 className="font-sans font-bold tracking-tight text-3xl">Report</h3>
    <div className="bg-card text-card-foreground border border-border rounded-xl p-4 my-6">
      <h3 className="font-sans font-medium tracking-tight text-xl">Formulated Idea</h3>
      <div className="space-y-4 my-2">
        <div>
          <h4 className="font-medium text-sm text-foreground mb-1">Target Customers</h4>
          <p className="text-muted-foreground text-sm">Urban professionals aged 25-40 with $60k+ income who value convenience and sustainability</p>
        </div>
        <div>
          <h4 className="font-medium text-sm text-foreground mb-1">USPs</h4>
          <p className="text-muted-foreground text-sm">Organic farm partnerships, electric vehicle delivery, mobile app with real-time tracking, exceptional customer service, loyalty programs, sustainable packaging</p>
        </div>
        <div>
          <h4 className="font-medium text-sm text-foreground mb-1">Identified Challenges</h4>
          <p className="text-muted-foreground text-sm">Balancing sustainability with operational efficiency, scaling delivery infrastructure, market validation through pilot program, securing $500k initial funding</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-8 font-medium">
      <Button>Refine Idea</Button>
      <Button>Explore Alternatives</Button>
    </div>
  </div>
)