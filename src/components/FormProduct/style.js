import styled from 'styled-components'

export const Container = styled.form`
    width: 100%;
    max-width: 39.0rem;
    padding: 2.4rem 1rem;

    @media(min-width:640px){
        padding: 3.4rem 4rem;
    }
`

export const Title = styled.h1`
    font-size: 2.4rem;
    width: auto;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`

export const Button = styled.button`
    width: 8.7rem;
    height: 6rem;
    outline: none;
    border: none;
    font-size: 1.6rem;
    border-radius: 1.2rem;
    font-weight: bold;
`

export const ButtonCancel = styled(Button)`
    background: transparent;
    color: #34333A;
    margin-right: 1.3rem;
`

export const ButtonSave = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--primary-color);
    color: white;
`