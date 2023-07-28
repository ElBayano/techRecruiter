import {createGlobalStyle} from "styled-components"

const LightTheme = createGlobalStyle`

:root {
    font-family: Inter, system-ui, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    width: 100vw;
    height: 100vh;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;


    --secondary: #3AB8E8;
    --primary: #101010;

    --gray-95:#f2f2f2;  /*  95% */
    --gray-74:#bdbdbd;
    --gray-67: #ababab;
    --gray-53: #878787;

    --background-color: #ffffff;

    --stroke-color: #FFFFFF80;
    --stroke-color-hover: #ffffff;

    --placeholder-color: var(--gray-67);
    --placeholder-color-hover: var(--gray-74);

    --text-title-color: #000000;
    --text-color-primary: #272833; 
    --text-color-secondary: #FFFFFF; 
    --text-color-tertiary : #ABABAB;

    --card-notification-color: #DC3434;
    --links-color: #0053F0;

    --tag-analysis-color: #ABABAB;
    --tag-hired-color: #FEC400;
    --tag-avaliable-color: #29CC97;
    --tag-urgent-color: #EB5757;
    --tag-no-urgent-color: #F2C94C;
    --tag-normal-color: #6FCF97;

}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {

    width: 100vw;
    height: 100vh;
    background-color: var(--primary);
}
`

export default LightTheme