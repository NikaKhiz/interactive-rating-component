import { GlobalStyles } from './components/Global/GlobalStyles';
import Survey from './components/Survey';
import Scores from './components/Scores';
import Submit from './components/Submit';
import Output from './components/Output';
import { StyledContent } from './components/Containers/StyledContent';
import { useState } from "react";

function App() {
    const [rate, setRate] = useState(0);
    const [submited, setSubmited] = useState(false);

    if (!submited) {
        return (
            <>
                <GlobalStyles />
                <StyledContent>
                    <Survey />
                    <Scores setRate={setRate} />
                    <Submit setSubmit={setSubmited} />
                </StyledContent>
            </>

        );
    } else {
        return (
            <>
                <GlobalStyles />
                <StyledContent>
                    <Output rateVal={rate} />
                </StyledContent>
            </>

        );
    }
}

export default App;