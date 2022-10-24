import styled from "styled-components";

const StyledParagraph = styled.p`
    color: var(--clr-LightGrey);
    font-size: 15px;
    line-height: 1.5;
    font-weight: 400;
    @media(max-width:375px) {
        font-size: 14px;
    }

    &.survey-calling {
      font-weight: 400;
    }
`

export default StyledParagraph;