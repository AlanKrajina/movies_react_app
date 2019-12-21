import React from 'react';

const TodoComp = (props) => {
    let listItems = props.entries.map((entry,index) => 
        (
        <li key={index}>
            <li>{entry.text}</li>
            <button onClick={()=>props.deleteItem(index)}>x</button>
            <button onClick={()=>props.moveUp(index)}>up</button>
            <button onClick={()=>props.moveDown(index)}>down</button>

        </li>
        ))

    return (
        <ul>
            {listItems} 
        </ul>
    )
}

export default TodoComp;






