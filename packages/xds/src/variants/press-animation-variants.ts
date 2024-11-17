import { cva } from "class-variance-authority";

export const pressAnimationVariants = cva(`
  duration-200 
  transition-all 
  active:bg-gray-100 
  cursor-pointer
  hover:bg-gray-50  
  active:duration-200  
`);
