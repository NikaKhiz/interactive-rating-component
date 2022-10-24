import styled from "styled-components";

const StyledHeading = styled.h1`
    color: var(--clr-White);
    font-size: 28px;
    text-transform: capitalize;

    @media (max-width:375px){
        font-size: 24px;
    }

    &.survey-heading{
        margin: 2rem 0 .5rem 0;
    }
`

export default StyledHeading;