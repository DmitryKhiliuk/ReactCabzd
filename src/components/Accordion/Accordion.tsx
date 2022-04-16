import React from "react";


export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
}


export function Accordion(props: AccordionPropsType) {

    return <div>

        <AccordionTitle title={props.titleValue} onClick={() => props.setAccordionCollapsed(!props.collapsed && true)}/>
        {!props.collapsed && <AccordionBody/>}
    </div>


    /*if (props.collapsed === true) {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
        </div>
    }*/


}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

