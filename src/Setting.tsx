import React from "react";
import s from './components/Setting.module.css'
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type SettingPropsType = {
    setMaxValue: (value: string) => void
    setStartValue: (value: string) => void
    maxValue: string
    startValue: string
    setValue: () => void
    disButton: () => boolean
}
export const Setting = (props: SettingPropsType) => {
//-----------------------------------STYLE----------------------------------------
    const styleDisco = () => {
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        return (`rgb(${r},${g},${b})`)
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
            <div className={s.settingField}>
                <div>
                    Max value
                    <Input changeValue={props.setMaxValue} value={props.maxValue}/>
                </div>
                <div>
                    Start value
                    <Input changeValue={props.setStartValue} value={props.startValue}/>
                </div>
            </div>
            <Button dis={props.disButton()} name={'set'} callback={props.setValue}/>
        </div>
    )
}