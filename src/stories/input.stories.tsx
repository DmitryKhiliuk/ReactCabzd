import React, {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title:'input'
}

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrilledInput = () => {
    const [value, setValue] = useState('');

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actual value: {value}</>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return <input value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)}}/>
}
export const Controlled = () => {
    const [parentValue, setParentValue] = useState(true)
    return <input type={'checkbox'} checked={parentValue} onChange={(e) => {setParentValue(e.currentTarget.checked)}}/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1')
    return <select value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}>
        <option value="1">Minsk</option>
        <option value="2">Warshaw</option>
        <option value="3">Kyiv</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>

