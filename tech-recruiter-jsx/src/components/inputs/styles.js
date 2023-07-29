import styled from "styled-components"


export const ContainerInput= styled.div`
    position: relative;
`
export const Input = styled.input`
    outline: none;
    color: var(--text-color-secondary);
    background-color: var(--primary);
    height: 2.75rem;
    border-radius: 0.5rem;
    outline: none;
    border: none;
    padding-left: 2.75rem;
    width: 18.75rem;
    border: 1px solid var(--stroke-color);
    
    &:hover {
        border: 1px solid var(--stroke-color-hover);
    }

    &::placeholder {
        color: var(--placeholder-color);
    }

    ::hover::placeholder {
        color: var(--placeholder-color-hover);
    }
    `

export const LoginIcon = styled.img`
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    margin-left: 15px;
`
