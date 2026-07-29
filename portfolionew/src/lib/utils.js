import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// project.image can be a single path or an array of paths (multi-image
// projects like YourBeep) — thumbnails/cards always want just the first one.
export function getProjectThumbnail(image) {
  return Array.isArray(image) ? image[0] : image;
}