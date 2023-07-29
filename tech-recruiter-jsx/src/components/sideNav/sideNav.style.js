import styled from "styled-components"

export const SideNavStyle = styled.div`
    background-color: var(--primary);
    width: 25.24%;
    height: /*100%*/ 100vh;
`
export const ListNavStyle = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
        > a {
            text-decoration: none;
            .liActive {
                color: var(--text-color-secondary);
                border-bottom: 0.1875rem var(--secondary) solid 
            }
            > li {
                display: inline-block;
                margin-left: 3.0625rem;
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