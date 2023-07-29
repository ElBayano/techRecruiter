import styled from "styled-components"

export const SideNavStyle = styled.div`
    background-color: var(--primary);
    width: 25.24%;
    height: /*100%*/ 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const ListNavStyle = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4.25rem;
    
    gap: 1.5rem;
    
        > a {
            text-decoration: none;
            margin-left: 3.0625rem;
            .liActive {
                color: var(--text-color-secondary);
                border-bottom: 0.1875rem var(--secondary) solid 
            }
            > li {
                display: inline-block;
                
                font-size: 1.375rem;
                font-family: "Inter", sans-serif;
                color: var(--text-color-tertiary);
                transition: all .150s;

                &:hover {
                    color: var(--text-color-secondary);
                }
            }
        }



`

