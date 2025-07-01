"use client"

import React, { useEffect, useState } from "react";
import AddConsideration from "@/components/AddConsideration";
import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
import Report from "@/components/Report";
import { AnimatePresence, motion } from "motion/react";
import { checkDevice, cn } from "@/lib/utils";
import { Message, messages } from "@/messages";

export default function Home() {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentMessageStack, setCurrentMessageStack] = useState<Message[]>([])
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance messages
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex + 1
        if (newIndex >= messages.length) {
          clearInterval(intervalId)
          return prevIndex
        }
        return newIndex
      })
    }, 2000)
    
    window.onload = playPopSound

    return () => clearInterval(intervalId)
  }, [])

  // Add new messages to the stack
  useEffect(() => {
    if (messages[currentIndex]) {
      setCurrentMessageStack(prev => [
        ...prev,
        messages[currentIndex]]
      )
      // Play pop sound when message is added
      playPopSound()
    }
  }, [currentIndex])

  const handleRefresh = () => {
    setCurrentIndex(-1);
    setCurrentMessageStack([]);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(checkDevice());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
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
      <Navbar onReportClick={() => setIsReportOpen(!isReportOpen)} isReportOpen={isReportOpen} onRefresh={handleRefresh} />
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
          className="h-full w-full max-w-4xl bg-background dark:bg-gradient-to-t from-10% from-neutral-100 to-neutral-300 dark:from-neutral-900 dark:to-neutral-950"
          style={{ willChange: "max-width" }}
        >
          <Chat currentMessageStack={currentMessageStack} />
          <AddConsideration isReportOpen={isReportOpen} />
        </motion.div>
        <AnimatePresence>
          {
            isReportOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(10px)",
                  x: isDesktop ? -40 : 0,
                  y: isDesktop ? 40 : 20
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  x: 0,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  scale: 0.90,
                  filter: "blur(10px)",
                  x: isDesktop ? -40 : 0,
                  y: isDesktop ? 40 : 20
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut"
                }}
                className={cn(
                  "h-screen w-full min-[74rem]:max-w-md absolute right-0",
                  isDesktop && "-z-10",
                  !isDesktop && "inset-0 z-10 bg-background"
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

// Function to create and play a pop sound
const playPopSound = () => {
  try {
    if (typeof window === "undefined") return;

    // @ts-expect-error have to give type "any" to window
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  } catch (error) {
    console.log('Audio playback not supported or blocked. E:', (error as Error).message);
  }
}