"use client"

import React, { useEffect, useState, useRef } from "react"
import { MessageBox } from "./ui/MessageBox"
import { Message, messages } from "@/messages"
import { AnimatePresence, motion } from "motion/react"

const Chat = () => {
  const [currentMessageStack, setCurrentMessageStack] = useState<Message[] | []>([]);
  const [idx, setIdx] = useState(0);
  const [userScrolledUp, setUserScrolledUp] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const isAlpha: boolean = currentMessageStack[currentMessageStack.length-1] && currentMessageStack[currentMessageStack.length-1].name === "alpha";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIdx(prevIdx => {
        const newIdx = prevIdx + 1;
        // Stop the interval if we've reached the end of messages
        if (newIdx >= messages.length) {
          clearInterval(intervalId);
        }
        return newIdx;
      });
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    console.log("current idx =", idx);
    if (messages[idx]) {
      setCurrentMessageStack(prev => ([
        ...prev,
        messages[idx]
      ]))
    }
  }, [idx])

  // Handle scroll events
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10 - 72 - 72; // 10px threshold and 72px is the size of the input box
      setUserScrolledUp(!isAtBottom);
    };

    chatContainer.addEventListener("scroll", handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);

    return () => chatContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll to bottom when new messages are added (only if user hasn't scrolled up)
  useEffect(() => {
    if (chatContainerRef.current && !userScrolledUp) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight + 72 + 72 + 10,
        behavior: "smooth"
      });
    }
  }, [currentMessageStack, userScrolledUp]);

  return (
    <div
      ref={chatContainerRef}
      className="md:p-8 p-3 pb-20 flex flex-col gap-2 h-[calc(100%-4.5rem)] md:h-[calc(100%-9rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      <AnimatePresence>
        {
          currentMessageStack.map(m => (
            <motion.div
              initial={{
                x: isAlpha ? -20 : 20,
                y: 20,
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
              transition={{
                duration: 0.3
              }}
              key={m.id}
            >
              <MessageBox
                sender={m.name}
                timestamp={m.timestamp}
                messageContent={m.content}
              />
            </motion.div>
          ))
        }
      </AnimatePresence>
    </div>
  )
}

export default Chat
