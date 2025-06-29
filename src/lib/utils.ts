import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// function to check the screen size of client
export const checkDevice = () => {
  return window.innerWidth > 1024; // 1024px is the standard laptop breakpoint
};