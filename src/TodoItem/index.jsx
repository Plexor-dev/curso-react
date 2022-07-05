import React from 'react';
import "./TodoItem.css"

export function TodoItem(props) {


    return (
        <li className="TodoItem">
            <span onClick={props.onComplete} className={`TodoItem__check ${props.completed && 'TodoItem__check-active'}`}>✔</span>
            <p className={`TodoItem__p ${props.completed && 'TodoItem__p-active'}`}>{props.text}</p>
            <span onClick={props.onDelete} className={`TodoItem__cross`}>❌</span>
        </li>
    );
}