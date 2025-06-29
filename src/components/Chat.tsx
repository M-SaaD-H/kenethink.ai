"use client"

import React, { useEffect, useState, useRef, useCallback } from "react"
import { MessageBox } from "./ui/MessageBox"
import { Message, messages } from "@/messages"
import { AnimatePresence, motion } from "motion/react"

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

const Chat: React.FC = () => {
  const [currentMessageStack, setCurrentMessageStack] = useState<Message[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userScrolledUp, setUserScrolledUp] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

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

  // Handle scroll events
  const handleUserScroll = useCallback(() => {
    const chatContainer = chatContainerRef.current
    if (!chatContainer) return

    const { scrollTop, scrollHeight, clientHeight } = chatContainer
    const threshold = 10
    const inputAndNavbarHeight = 144 // 72px * 2 for input box and navbar
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - threshold - inputAndNavbarHeight

    setUserScrolledUp(!isAtBottom)
  }, [])

  useEffect(() => {
    const chatContainer = chatContainerRef.current
    if (!chatContainer) return

    chatContainer.addEventListener("scroll", handleUserScroll)

    // Initial check after a short delay to ensure proper layout
    const initialCheck = setTimeout(handleUserScroll, 100)

    return () => {
      chatContainer.removeEventListener("scroll", handleUserScroll)
      clearTimeout(initialCheck)
    }
  }, [handleUserScroll])

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer || userScrolledUp) return

    chatContainer.scrollTo({
      top: chatContainer.scrollHeight + 144 + 10, // inputAndNavbarHeight + threshold
      behavior: "smooth"
    })
  }, [currentMessageStack, userScrolledUp]);

  return (
    <div
      ref={chatContainerRef}
      className="md:p-8 p-3 pb-20 flex flex-col gap-2 h-[calc(100%-4.5rem)] md:h-[calc(100%-9rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <AnimatePresence>
        {
          currentMessageStack.map((message) => (
            <motion.div
              key={message.id}
              initial={{
                x: message.name === "alpha" ? -30 : 30,
                y: 30,
                scale: 0.95,
                opacity: 0,
                filter: "blur(10px)"
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                filter: "blur(0px)"
              }}
              transition={{ duration: 0.3 }}
            >
              <MessageBox
                sender={message.name}
                timestamp={message.timestamp}
                messageContent={message.content}
              />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}

export default Chat
