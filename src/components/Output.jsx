import thanksImg from '.././images/illustration-thank-you.svg';
import StyledHeading from './Text/StyledHeadings';
import StyledParagraph from './Text/StyledParagraph';
import { ThanksCont, ThanksScore } from './Containers/ThanksCont';
import { ThanksRating } from './Text/ThanksRating';
const Output = ({ rateVal }) => {
    return (
        <ThanksCont>
            <ThanksScore>
                <img src={thanksImg} alt="thank you illustration" />
                <ThanksRating>
                    You selected {rateVal} out of 5
                </ThanksRating>
            </ThanksScore>
            <div>
                <StyledHeading>thank you!</StyledHeading>
                <StyledParagraph>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</StyledParagraph>
            </div>

        </ThanksCont>
    );
}

export default Output;