import React from "react";
import s from './Display.module.css';

type propsDisplayType = {
    value: number
    maxValue: number
    disButton:()=> boolean
}

export const Display = (props: propsDisplayType)=> {

    const forRenderOnDisplay = () => {
        if (!props.disButton()/*button enable*/) {
            return <span>enter values and press 'set'</span>
        } else if (props.disButton()/*button disable*/) {
            return <span className={props.value >= props.maxValue ? s.numberOver : s.number }>{props.value}</span>
        }
    }


    return (
        <div className={s.display}>
            {forRenderOnDisplay()}
        </div>

    )
}