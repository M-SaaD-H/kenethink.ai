import React from "react"

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
    <div className="flex gap-2">
      <div className="h-10 w-10 bg-foreground text-background my-3 rounded-full flex justify-center items-center text-xl">
        {
          sender === "alpha" ? <>&alpha;</> : <>&beta;</>
        }
      </div>
      <div>
        <div className="flex gap-2 items-center my-1">
          <h3 className="font-medium">Agent {sender === "alpha" ?  "Alpha" : "Beta"}</h3>
          <p className="text-sm text-muted-foreground">7:36 AM</p>
        </div>
        <div className="bg-secondary text-secondary-foreground text-base rounded-tr-2xl rounded-b-2xl rounded-tl-md p-4 max-w-lg">
          {messageContent}
        </div>
      </div>
    </div>
  )
}