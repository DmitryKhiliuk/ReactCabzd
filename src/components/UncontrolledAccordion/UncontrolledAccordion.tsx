import React, {useReducer, useState} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string;
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    /*let [collapsed, setCollapsed] = useState(false)*/
    let [collapsed, dispatch] = useReducer(reducer, false)

    return <div>
        {/*<AccordionTitle title={props.titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
        <AccordionTitle title={props.titleValue}  onClick={() => {dispatch({type:'TOGGLE-COLLAPSED'})}}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

export type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}
export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}
function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

