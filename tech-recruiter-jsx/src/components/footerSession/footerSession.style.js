import styled from "styled-components"
import {FooterSessionAnimation} from "./footerSession.animation"

export const FooterSessionStyled = styled.div`


  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  position: absolute;
  bottom: 0;
  left: 0;
  animation: ${FooterSessionAnimation} 1s  forwards;
  z-index: 1000;
  
  `