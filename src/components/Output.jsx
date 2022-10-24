import thanksImg from '.././images/illustration-thank-you.svg';
import StyledHeading from './Text/StyledHeadings';
import StyledParagraph from './Text/StyledParagraph';

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
                <StyledHeading>thank you!</StyledHeading>
                <StyledParagraph className='survey-calling'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</StyledParagraph>
            </div>

        </div>
    );
}

export default Output;