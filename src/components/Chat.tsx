import React from "react"
import { MessageBox } from "./ui/MessageBox"
import { messages } from "@/messages"

const Chat = () => {
  return (
    <div className="md:p-8 p-3 flex flex-col gap-2">
      {
        messages.map(m => (
          <MessageBox
            sender={m.name}
            timestamp={m.timestamp}
            messageContent={m.content}
            key={m.id}
          />
        ))
      }
    </div>
  )
}

export default Chat
