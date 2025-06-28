import React from "react"
import { MessageBox } from "./ui/MessageBox"

const Chat = () => {
  return (
    <div className="md:p-8 p-4">
      <MessageBox
        sender="alpha"
        timestamp="7:36 AM"
        messageContent="This is the test message content"
      />
    </div>
  )
}

export default Chat
