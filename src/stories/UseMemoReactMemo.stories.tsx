import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo+ReactMemo',
}

// export const DifficultCountingExample = () => {
// };

const UsersSecret = (props:{users: string[]}) => {
    console.log('users')
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('helps')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Anna', 'Lisa'])

    const newArray = useMemo ( () => {
        return users.filter(el => el.toLowerCase().indexOf('i') > -1)// filter дает новый массив, на который React.memo не действует. Поэтому дополнительно заключаем его в useMemo
        }, [users] // users - параметр, после изменения которого происходит перерисовка компонента Users
    )

    const addUser = () => {
      setUsers([...users, 'Irina' + new Date().getTime()])
    }

    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}

const BooksSecret = (props:{books: string[]; addBook: () => void}) => {
    console.log('BookSecret')
    return <div>
        <button onClick={props.addBook}>addUser</button>
        {props.books.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Book = React.memo(BooksSecret);

export const LikeUseCallBack = () => {
    console.log('helps')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

    const newArray = useMemo ( () => {
            return books.filter(el => el.toLowerCase().indexOf('a') > -1)// filter дает новый массив, на который React.memo не действует. Поэтому дополнительно заключаем его в useMemo
        }, [books] // books - параметр, после изменения которого происходит перерисовка компонента Users
    )



    const memoizeAddBook = useMemo(() => {
        return () => {
            setBooks([...books, 'Angular' + new Date().getTime()])
        }
    }, [books])

    const memoizeAddBook2 = useCallback(() => {
            setBooks([...books, 'Angular' + new Date().getTime()])
    }, [books])




    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>

        {counter}
        <Book books={newArray} addBook={memoizeAddBook}/>
    </>
}

