import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoSearch.css"

export function TodoSearch() {
    const { searchValue,
        setSearchValue } = React.useContext(TodoContext);

    const onChangeInput = (event) => {
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return [
        <input className="TodoSearch" placeholder="Escribe algo" value={searchValue} onChange={onChangeInput} />,
        <p>{searchValue}</p>
    ]
}