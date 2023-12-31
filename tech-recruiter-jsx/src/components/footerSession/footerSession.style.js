import styled from "styled-components"
import {FooterSessionAnimation, FooterSessionAnimationProvisional} from "./footerSession.animation"

export const FooterSessionStyled = styled.div`

  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  position: absolute;
  bottom: 0;
  left: 0;
  clip-path: polygon(0 90%, 100% 80%, 100% 100%, 0% 100%);
  animation: ${FooterSessionAnimationProvisional} 1s ;
  z-index: 1000;
  `