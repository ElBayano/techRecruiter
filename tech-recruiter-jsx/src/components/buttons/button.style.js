import styled from "styled-components"
import React from "react"

export const Button = styled.button`
    font-size: 0.87rem;
    width: 18.75rem;
    height: 2.75rem;
    border: none;
    border-radius: 0.5rem;

    text-transform: uppercase;

    background-color: var(--secondary);
    color: var(--text-color-secondary);

    transition: all .150s;

    font-weight: 600;
    cursor: pointer;


&:hover{
    transform: scale(1.02);
}
`
