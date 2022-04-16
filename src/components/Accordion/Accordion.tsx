import React from "react";


export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    setAccordionCollapsed: (accordionCollapsed: boolean) => void
    items: Array<ItemType>
    onClick: (value: any) => void
}


export function Accordion(props: AccordionPropsType) {

    return <div>

        <AccordionTitle title={props.titleValue} onClick={() => props.setAccordionCollapsed(!props.collapsed && true)}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

export type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return <ul>
        {props.items.map((i,index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>

}

