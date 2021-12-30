import React, {useState} from "react";
import s from './Main.module.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import {restoreState} from "./LocalStarage";

type CounterPropsType = {
    setCounter: (value: number)=> void
    counter: number
    disButton: ()=> boolean
}

export const Counter = (props:CounterPropsType) => {
    let startValue = Number(restoreState('startValue'))
    let maxValue = Number(restoreState('maxValue'))

    const onIncreaseHandler = () => {
        props.setCounter(props.counter + 1)
    }
    const onDropHandler = () => {
        props.setCounter(startValue)
    }
    /*let disIncrease;
    let disDrop;
    props.counter >= maxValue ? disIncrease = true : disIncrease = false
    props.counter === startValue ? disDrop = true : disDrop = false*/

    const disButtonIncrease = () => {
        if (props.counter >= maxValue) {
            return true
        } else return !props.disButton();
    }
    const disButtonDrop = () => {
        if (props.counter === startValue) {
            return true
        } else return !props.disButton();
    }



//-----------------------------------STYLE----------------------------------------
    const styleDisco = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return (`rgb(${r},${g},${b})`)
    }
    const discoButtons = {
        border: `2px solid ${styleDisco()}`,
        display: 'flex',
        'justify-content': 'space-around',
        margin: '10px',
        width: 'auto',
        height: '30px',
        'background-color': `${styleDisco()}`,
        'border-radius': '5px',
    }
    const discoMain = {
        margin: '30px',
        width: '200px',
        height: '150px',
        border: `2px solid ${styleDisco()}`,
        'background-color': `${styleDisco()}`,
        'border-radius': '10px',
        'box-shadow': `0 0 30px 5px ${styleDisco()}`,
        transition: '1s box-shadow',
    }
//--------------------------------------------------------------------------------
    return (
        <div style={discoMain}>
            <Display value={props.counter} maxValue={maxValue} disButton={props.disButton}/>
            <div style={discoButtons}>

                <Button name={'increase'} callback={onIncreaseHandler} dis={disButtonIncrease()}/>

                <Button name={'drop'} callback={onDropHandler} dis={disButtonDrop()}/>
            </div>
        </div>
    )
}