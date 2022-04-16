import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack = action('accordion mode change event fired');
  
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue:'Menu',
    collapsed:true,
    setAccordionCollapsed:callBack
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    titleValue:'Users',
    collapsed:false,
    setAccordionCollapsed:callBack
}



export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return  <Accordion titleValue={'Users'} collapsed={value} setAccordionCollapsed={setValue}/>
}

