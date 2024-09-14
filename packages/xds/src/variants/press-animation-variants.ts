import { cva } from "class-variance-authority";

export const pressAnimationVariants = cva(`
  duration-200 
  transition-all 
  active:bg-gray-100 
  cursor-pointer

  active:transition-transform
  active:duration-200

  active:scale-[0.99]
  
`);
