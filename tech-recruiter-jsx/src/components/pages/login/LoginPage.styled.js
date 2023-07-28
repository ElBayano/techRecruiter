import {createGlobalStyle} from "styled-components"

export const LoginPageStyle = createGlobalStyle`


.app {

  background-color: var(--primary);
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-login {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.875rem;
}

.logo {
  font-family: 'Work Sans', sans-serif;
  font-size: 5rem;
  color: var(--secondary);
  font-weight: 800;
}


.styled-footer {
  width: 100%;
  height: 100%;
  background-color: var(--secondary);
  position: absolute;
  bottom: 0;
  left: 0;
  clip-path: polygon(0 90%, 100% 80%, 100% 100%, 0% 100%);
  animation: styledFooter 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  z-index: 1000;
}


@keyframes styledFooter {
  from {clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0% 100%);}
  to {clip-path: polygon(0 90%, 100% 80%, 100% 100%, 0% 100%);}
  
}`