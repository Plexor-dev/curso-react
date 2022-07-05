import React from 'react';
import "./CreateTodoButton.css"

export function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(modalState => !modalState);
    }

    return (
        <button className="CreateTodoButton" type="button" onClick={onClickButton}>➕</button>
    );
}