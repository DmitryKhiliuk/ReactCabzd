import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff',
    component: OnOff,
}
const callBack = action('on or off clicked');
  


export const OnMode = () => <OnOff on={true} setOn={callBack}/>;
export const OffMode = () => <OnOff on={false} setOn={callBack}/>;

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return <OnOff on={value} setOn={setValue} />
}

