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
      <div className="h-10 w-10 shrink-0 bg-foreground text-background my-3 rounded-full flex justify-center items-center text-xl">
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