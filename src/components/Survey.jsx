import StarImage from '.././images/icon-star.svg';
import { StyledStarCont } from './Containers/StarCont';
import StyledHeading from './Text/StyledHeadings';
import StyledParagraph from './Text/StyledParagraph';

const Survey = () => {
    return (
        <div className="survey">
            <StyledStarCont>
                <img src={StarImage} alt="star icon" />
            </StyledStarCont>
            <StyledHeading className='survey-heading'>
                How did we do?
            </StyledHeading>
            <StyledParagraph className='survey-calling'>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </StyledParagraph>
        </div>
    );
}

export default Survey;