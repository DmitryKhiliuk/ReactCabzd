import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)
    const onClick = () => {

    }

    return (
        <div className={'App'}>


            <OnOff on={on} setOn={setOn}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>

            <UncontrolledRating onChange={() => (0 | 1 | 2 | 3 | 4 | 5)}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}
                       items={[]}
                       onClick={onClick}/>



            {/*<Accordion titleValue={"Users"} collapsed={true}/>

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    )
}

type AppTitlePropsType = {
    title: string;
}

function AppTitle(props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
