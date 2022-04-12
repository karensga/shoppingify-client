import styled from 'styled-components'

export const Nav = styled.nav`
    padding: 3.4rem 0;
    width: 20%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: space-between;
`

export const Img = styled.img`
    width: 3.8rem;
    height: 3.8rem;
    margin: 0 auto;
`
export const Ul = styled.ul`

`

export const Li = styled.li`
    display: flex;
    justify-content: center;
    justify-items: center;
    width: 80%;
    height: 4.5rem;
    list-style: none;
    margin: 2rem auto;
    padding: 0.5rem auto;
    color: #454545;
`

export  const Button = styled.button`
    position: relative;
    display: flex;
    width: 4.2rem;
    height: 4.2rem;
    background: var(--primary-color);
    border-radius: 100%;
    border: none;
    margin: 0 auto;
`

export const ItemsSignal = styled.span`
    padding: auto 0;
    position: absolute;
    display: flex;
    justify-content: center;
    justify-items: center;
    background: var(--background-ping);
    color: white;
    width: 20.72px;
    height: 19.97px;
    right: -5px;
    top: -7px;
    border-radius: 4px;
`