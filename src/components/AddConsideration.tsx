import React from 'react'
import { Input } from './ui/input'
import { IconSend } from '@tabler/icons-react'

const AddConsideration = () => {
  return (
    <div className="w-full h-18">
      <div className="max-w-4xl w-full fixed bottom-0 bg-background">
        <div className="bg-gradient-to-t from-background to-transparent h-6 w-full absolute bottom-full left-0" />
        <div className="px-4 pb-6 flex gap-2 max-w-4xl w-full">
          <Input
            type="text"
            placeholder="Add this consideration..."
            variant={"filled"}
            className="px-4 py-6 rounded-xl"
          />
          <div className="p-2 h-12 w-12 bg-secondary text-secondary-foreground rounded-xl flex justify-center items-center cursor-pointer">
            <IconSend />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddConsideration
