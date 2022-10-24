import styled from "styled-components";

export const StyledContent = styled.div`
    max-width: 412px;
    max-height: 416px;
    padding: 2rem;
    border: none;
    border-radius: 30px;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 24px;
    @media (max-width:375px){
        max-width: 327px;
        border-radius: 15px;
    }
`