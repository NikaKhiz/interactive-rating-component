import styled from "styled-components";

export const ScoresCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Score = styled.div`
    display: grid;
    place-items: center;
    width: 50px;
    padding: 12px;
    background-color: var(--clr-DarkBlue);
    color: var(--clr-MediumGrey);
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        background-color: var(--clr-Orange);
        color: var(--clr-White);
    }

    &.active{
        background-color: var(--clr-MediumGrey);
        color: var(--clr-White);
    }
`

