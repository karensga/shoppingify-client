import styled from 'styled-components'

export const Container = styled.div`
    height: auto;
    min-width: 182px;
    width: 100%;
    display: flex;
    padding: 20px 15px;
    justify-content: space-between;
    justify-items: center;
    border-radius: 12px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
    font-size: 1.7rem;

`

export const Button = styled.button`
    display: flex;
    align-items:center;
    border: 0;
    background: none;
    color: var(--color-icon);

    .icon{
        width: 3rem;
        height: 3rem;
    }
`

export const Title = styled.p`
    display: flex;
    align-items:center;

`