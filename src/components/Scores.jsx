const Scores = ({ setRate }) => {
    let scores = [1, 2, 3, 4, 5];
    let scoreItems = scores.map(item => <div key={item} className="score">{item}</div>)

    const handleScore = (e) => {
        if (!e.target.classList.contains('score')) return;
        Array.from(e.target.parentElement.childNodes).forEach(elem => {
            elem.classList.remove('active');
        });
        setRate(e.target.textContent);
        e.target.classList.add('active');
    }

    return (
        <div className="scores" onClick={handleScore}>
            {scoreItems}
        </div>
    );
}

export default Scores;