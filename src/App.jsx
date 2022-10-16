import Survey from './components/Survey';
import Scores from './components/Scores';
import Submit from './components/Submit';
import Output from './components/Output';
import { useState } from "react";


function App() {
    const [rate, setRate] = useState(0);
    const [submited, setSubmited] = useState(false);

    if (!submited) {
        return (
            <div className="App">
                <div className='content'>
                    <Survey />
                    <Scores setRate={setRate} />
                    <Submit setSubmit={setSubmited} />
                </div>
            </div>
        );
    } else {
        return (
            <div className="App">
                <div className='content'>
                    <Output rateVal={rate} />
                </div>
            </div>
        );
    }
}

export default App;

// dekstop1440 mobile 375 