"use client"

import React, { useEffect, useState, useRef, useCallback, useMemo } from "react"
import { MessageBox } from "./ui/MessageBox"
import { Message, messages } from "@/messages"
import { AnimatePresence, motion } from "motion/react"

// Animation variants for message entrance
const messageVariants = {
  hidden: {
    x: 0,
    y: 20,
    scale: 0.95,
    opacity: 0,
    filter: "blur(10px)"
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    filter: "blur(0px)"
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
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  // Add new messages to the stack
  useEffect(() => {
    if (messages[currentIndex]) {
      setCurrentMessageStack(prev => [
        ...prev,
        messages[currentIndex]]
      )
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
              variants={messageVariants}
              initial="hidden"
              animate="visible"
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
