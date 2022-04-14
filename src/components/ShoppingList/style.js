import styled from 'styled-components'

export const Container = styled.div`
    display: none;
    width: 100%; 
    max-width: 39.0rem;
    height: 100%;
    background-color: var(--background-shoppingList);
    display: flex;
    flex-direction: column;

`

export const Header = styled.header`
    display: flex;
    background-color: var(--background-shoppingList-addList);
    color: white;
    width: 90%;
    max-width: 30.8rem;
    height: 12.9rem;
    border-radius: 2.4rem;
    margin: 4.3rem auto;
    font-size: 1.6rem;
    font-weight: bold;
`

export const Img = styled.img`
    margin: 0 auto;
    margin-top: -1.6rem;
    margin-bottom: 1.6rem;
`

export const  TextHeader = styled.p`
    margin-bottom: 1.5rem;
`

export const HeaderContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
    margin-left: 0;

`

export const Button = styled.button`
    background-color: white;
    border: none;
    border-radius: 1.2rem;
    font-size: 1.4rem;
    font-weight: 500;
    width: 12rem;
    height: 4rem;
`

export const Main = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const HeaderMain = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 4.8rem;
`

export const  HeaderTitle = styled.h1`
    font-size: 2.4rem;
    color: var(--color-shoppingList-section);
`
export const  HeaderMainButton = styled.button`
    background: transparent;
    border: none;

    .icon {
        font-size: 1.8rem !important;
    }
`

export const ContainerNoItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const TextNoItems = styled.p`
    font-size: 2rem;
    text-align: center;
`

export const ImageNoItems = styled.img`
    display: flex;
    margin: 0 auto;
    z-index: 100;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 60%;
    height: auto;
`

export const Footer = styled.footer`
    background-color: white;
    height: 10rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width:640px) {
        height: 13rem;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: transparent;
    border-radius: 1.2rem;
    padding: 0 1.7rem;
    font-weight: bold;
    color: var(--color-shoppingList-input);
    outline: none;

    &::placeholder {
        color: var(--color-shoppingList-input);
    }

`

export const WrapperInput = styled.div`
    display: flex;
    width: 90%;
    max-width: 30.9rem;
    height: 6.1rem;
    position: absolute;
    border: 0.2rem solid var(--color-shoppingList-input);
    border-radius: 1.2rem;
    transition: all .3s ease;

    ${Input}:focus~& {
        border: 0.2rem solid var(--primary-color);
    }

    &:focus-within {
        border: 0.2rem solid var(--primary-color);
    }

    @media(min-width:640px) {
        width: 100%;
        max-width: 30.9rem;
    }
`



export const ButtonSave = styled.button`
    width: 8.7rem;
    height: 100%;
    background-color: var(--color-shoppingList-input);
    border: none;
    color: white;
    font-size: 1.6rem;
    border-radius: 1.2rem 10px 10px 1.2rem;
    font-weight: 500;
    transition: all .3s ease;

    ${WrapperInput}:focus-within>& {
        background-color: var(--primary-color);
    }
`