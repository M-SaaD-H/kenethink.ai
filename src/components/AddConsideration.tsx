import React from 'react'
import { Input } from './ui/input'
import { IconSend } from '@tabler/icons-react'
import { motion } from 'motion/react'

const AddConsideration = ({ isReportOpen }: { isReportOpen: boolean }) => {
  return (
    <div className="w-full h-18 relative">
      <motion.div
        initial={false}
        animate={{
          maxWidth: isReportOpen ? "48rem" : "56rem" // 3xl = 48rem & 4xl = 56rem
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full fixed bottom-0 bg-background dark:bg-neutral-900"
      >
        <div className="bg-gradient-to-t from-background dark:from-neutral-900 to-transparent h-6 w-full absolute bottom-full left-0" />
        <div className="px-4 pb-6 flex gap-2 w-full">
          <Input
            type="text"
            placeholder="Add this consideration..."
            variant={"filled"}
            disabled
            className="px-4 py-6 rounded-xl"
          />
          <div className="p-2 h-12 w-12 bg-secondary text-secondary-foreground rounded-xl flex justify-center items-center cursor-pointer">
            <IconSend />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AddConsideration
