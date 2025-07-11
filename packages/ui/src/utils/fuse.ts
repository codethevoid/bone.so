import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const fuse = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
