import {keyframes} from "styled-components/"

export const FooterSessionAnimation = keyframes` 
    0% {clip-path: polygon(0 90%, 100% 80% ,100% 80%, 100% 100%, 0% 100%);}
    50% {clip-path: polygon(0 90%, 100% 80%, 100% 0%, 100% 100%, 0% 100%);}
    
    100% {clip-path: polygon(0 90%, 0% 0%, 100% 0%, 100% 100%, 0% 100%);}
    `