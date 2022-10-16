import StarImage from '.././images/icon-star.svg';

const Survey = () => {
    return (
        <div className="survey">
            <div className="star-cont">
                <img src={StarImage} alt="star icon" />
            </div>
            <h1 className="survey-heading">
                How did we do?
            </h1>
            <p className="survey-calling">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
        </div>
    );
}

export default Survey;