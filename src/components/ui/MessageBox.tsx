import React from "react"
import { cn } from "@/lib/utils"

export const MessageBox = ({
  sender,
  timestamp,
  messageContent
}: {
  sender: "alpha" | "beta",
  timestamp: string,
  messageContent: string
} ) => {
  return (
    <div
      className={cn(
        "flex gap-2 p-2",
        sender === "alpha" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "h-10 w-10 shrink-0 bg-foreground text-black my-3 rounded-full flex justify-center items-center text-xl",
          "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
          sender === "alpha" ? "bg-blue-200" : "bg-purple-200",
        )}
      >
        {
          sender === "alpha" ? <>&alpha;</> : <>&beta;</>
        }
      </div>
      <div className="flex flex-col">
        <div
          className={cn(
            "flex gap-2 items-center my-1",
            sender !== "alpha" && "ml-auto mr-4"
          )}
        >
          <h3 className="font-medium">Agent {sender === "alpha" ?  "Alpha" : "Beta"}</h3>
          <p className="text-sm text-muted-foreground">{timestamp}</p>
        </div>
        <div
          className={cn(
            "bg-secondary text-secondary-foreground text-base rounded-b-2xl p-4 max-w-lg border border-border",
            sender === "alpha" ? "rounded-tr-2xl rounded-tl-md" : "rounded-tr-md rounded-tl-2xl",
          )}
        >
          {messageContent}
        </div>
      </div>
    </div>
  )
}