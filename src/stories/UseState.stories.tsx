import React, {useMemo, useState} from 'react'

export default  {
    title: 'useState demo',
}


function generateData() {
    //difficult counting
    console.log('generateData')
    return 1
}


export const Example1 = () => {
    console.log('Example1')

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData); // функция дает эффект useMemo

    const changer = (state: number) => state + 1 // функция изменитель

    return <>
        <button onClick={()=>setCounter(changer)}>+</button>
        {counter}
    </>
}