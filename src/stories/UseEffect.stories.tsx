import React, {useEffect, useMemo, useState} from 'react'

export default  {
    title: 'useEffect demo',
}
export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render') //срабатывает при каждой отрисовке
        document.title = counter.toString()
    }, )

    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)') //срабатывает только при первой отрисовке
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change') // срабатывает при первой отрисовке и после каждого изменения counter
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={()=>setFake(fake +1)}>fake+</button>
        <button onClick={()=>setCounter(counter +1)}>counter+</button>

    </>
}