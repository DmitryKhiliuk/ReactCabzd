import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion,
}
const callBack = action('accordion mode change event fired');
const onClickCallBack = action('some item was clicked');

  
const Template: Story<AccordionPropsType> = (args) => {
    return <Accordion {...args}/>
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue:'Menu',
    collapsed:true,
    setAccordionCollapsed:callBack,
    items:[],
    onClick: onClickCallBack
}

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    titleValue:'Users',
    collapsed:false,
    setAccordionCollapsed:callBack,
    onClick: onClickCallBack,
    items: [{title: 'Dimych', value: 1},
            {title: 'Valera', value: 2},
            {title: 'Artem', value: 3},
            {title: 'Viktor', value: 4}]

}



export const ModeChanging = () => {
    const[value, setValue] = useState<boolean>(true)
    return  <Accordion titleValue={'Users'} collapsed={value} onClick={onClickCallBack} setAccordionCollapsed={setValue} items={[{
        title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}]}/>
}

