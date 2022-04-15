import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: any;

}


function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={props.titleValue} collapsed={collapsed} setCollapsed={setCollapsed}/>
        <button onClick={() => setCollapsed(() => !collapsed && true )}>CLOSE</button>
        {!collapsed && <AccordionBody/>}
    </div>


}

type AccordionTitlePropsType = {
    title: string;
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.setCollapsed(!props.collapsed && true)}>{props.title}</h3>
    )
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

}

export default UncontrolledAccordion;