import { keyframes } from "@mui/system";
/**
 * ----------------------------------------
 * animation text-pop-up-top
 * ----------------------------------------
 */
export const textPopUpTop = keyframes ` 
 0% {
   -webkit-transform: translateY(0);
           transform: translateY(0);
   -webkit-transform-origin: 50% 50%;
           transform-origin: 50% 50%;
   text-shadow: none;
 }
 100% {
   -webkit-transform: translateY(-10px);
           transform: translateY(-10px);
   -webkit-transform-origin: 50% 50%;
           transform-origin: 50% 50%;
   text-shadow: 0 1px 0 #000, 0 2px 0 #000, 0 3px 0 #000, 0 4px 0 #000, 
   0 5px 0 #000, 0 6px 0 #000, 0 7px 0 #000, 0 8px 0 #000, 0 9px 0 #000;
   /* text-shadow: 0 1px 0 #000, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 
   0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc; */
 }
`;