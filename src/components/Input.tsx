import React, {ChangeEvent} from 'react';
import i from './Display.module.css'

type SelectPropsType = {
    changeValue: (value: string) => void
    value: string
}

export const Input = (props: SelectPropsType) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(e.currentTarget.value)
    }


    return (
        <input className={i.input} type='number' value={props.value} onChange={onChangeCallback}>

        </input>
    );
};

