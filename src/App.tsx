import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Setting} from "./Setting";
import {restoreState, saveState} from "./LocalStarage";

function App() {
    const [maxValue, setMaxValue] = useState('5')
    const [startValue, setStartValue] = useState('0')
    const [counter, setCounter] = useState(Number(startValue))

    const setValue = () => {
        saveState('maxValue', maxValue)
        saveState('startValue', startValue)
        setCounter(Number(startValue))
    }


    const disButton = () => {
        if (Number(maxValue) <= Number(startValue)) {
            return true
        } else if (Number(maxValue) < 0 || Number(startValue) < 0) {
            return true
        } else {
            return Number(maxValue) === Number(restoreState('maxValue')) && Number(startValue) === Number(restoreState('startValue'));
        }
    }


    return (
        <div className="App">
            <Setting
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                startValue={startValue}
                setValue={setValue}
                disButton={disButton}
            />
            <Counter setCounter={setCounter} counter={counter} disButton={disButton}/>
        </div>
    );
}

export default App;
