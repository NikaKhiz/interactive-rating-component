import thanksImg from '.././images/illustration-thank-you.svg';

const Output = ({ rateVal }) => {
    return (
        <div className="thanks">
            <div className='thanks-score'>
                <img src={thanksImg} alt="thank you illustration" />
                <div className="rating-text">
                    You selected {rateVal} out of 5
                </div>
            </div>
            <div className="survey-calling">
                <h1>thank you!</h1>
                <p class="survey-calling">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>

        </div>
    );
}

export default Output;