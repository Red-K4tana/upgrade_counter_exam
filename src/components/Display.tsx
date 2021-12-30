import React from "react";
import s from './Display.module.css';

type propsDisplayType = {
    value: number
    maxValue: number
    disButton: () => boolean
    errorMessage: () => boolean
}

export const Display = (props: propsDisplayType) => {

    const forRenderOnDisplay = () => {
        if (!props.disButton()/*button enable*/) {
            return <div className={s.message}>enter values and press 'set'</div>
        } else if (props.disButton()/*button disable*/) {
            if (props.errorMessage()) {
                return <div className={s.errorMessage}>incorrect value!</div>
            }
            return <div className={props.value >= props.maxValue ? s.numberOver : s.number}>{props.value}</div>
        }
    }


    return (
        <div className={s.display}>
            {forRenderOnDisplay()}
        </div>

    )
}