const Submit = ({ setSubmit }) => {
    const handleSubmit = () => {
        setSubmit(true);
    }
    return (
        <div className="submit-cont">
            <button onClick={handleSubmit} className="submit-btn">
                submit
            </button>
        </div>
    );

}

export default Submit;
