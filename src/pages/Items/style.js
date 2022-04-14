import styled from 'styled-components'

export const Header = styled.header`
    font-weight: bold;
    font-style: normal;
    display: flex;
    display: none;

    @media(min-width:640px) {
        display: block;
    }
`