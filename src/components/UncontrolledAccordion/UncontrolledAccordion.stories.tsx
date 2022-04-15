import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack = action('accordion mode change event fired');
  


export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setAccordionCollapsed={callBack}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setAccordionCollapsed={callBack}/>;

export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return  <Accordion titleValue={'Users'} collapsed={value} setAccordionCollapsed={setValue}/>
}

