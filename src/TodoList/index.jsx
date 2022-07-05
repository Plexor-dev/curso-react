import React from 'react';
import "./TodoList.css"

export function TodoList(props) {
    return (
        <section className="TodoList">
        <ul>
            {props.children}
        </ul>
    </section>
    );
}