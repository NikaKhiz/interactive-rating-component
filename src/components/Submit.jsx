import StyledButton from "./Button/Button";

const Submit = ({ setSubmit }) => {
    const handleSubmit = () => {
        setSubmit(true);
    }
    return (
        <div className="submit-cont">
            <StyledButton onClick={handleSubmit} className="submit-btn">
                submit
            </StyledButton>
        </div>
    );

}

export default Submit;
