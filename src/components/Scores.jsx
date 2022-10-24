import { Score } from "./Containers/ScoresCont";
import { ScoresCont } from "./Containers/ScoresCont";
const Scores = ({ setRate }) => {
    let scores = [1, 2, 3, 4, 5];
    let scoreItems = scores.map(item => <Score key={item} className="score">{item}</Score>)

    const handleScore = (e) => {
        if (!e.target.classList.contains('score')) return;
        Array.from(e.target.parentElement.childNodes).forEach(elem => {
            elem.classList.remove('active');
        });
        setRate(e.target.textContent);
        e.target.classList.add('active');
    }

    return (
        <ScoresCont  onClick={handleScore}>
            {scoreItems}
        </ScoresCont>
    );
}

export default Scores;