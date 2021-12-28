import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Setting} from "./Setting";
import {saveState} from "./LocalStarage";

function App() {
    const [maxValue, setMaxValue] = useState('5')
    const [startValue, setStartValue] = useState('0')

    const [counter, setCounter] = useState(Number(startValue))

    const setValue = () => {
        saveState('maxValue', maxValue)
        saveState('startValue', startValue)
        setCounter(Number(startValue))
    }



    return (
        <div className="App">
            <Setting setMaxValue={setMaxValue}
                     setStartValue={setStartValue}
                     maxValue={maxValue}
                     startValue={startValue}
                     setValue={setValue} />
            <Counter setCounter={setCounter} counter={counter}/>
        </div>
    );
}

export default App;
