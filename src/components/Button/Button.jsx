import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 11px;
  outline: none;
  border: none;
  border-radius: 22px;
  background-color: var(--clr-Orange);
  color: var(--clr-White);
  text-transform: uppercase;
  cursor: pointer;
  transition: all .3s ease-in-out;
  letter-spacing: 2px;

  &:hover {
    background-color: var(--clr-White);
    color: var(--clr-Orange);
  }
`


export default StyledButton;

