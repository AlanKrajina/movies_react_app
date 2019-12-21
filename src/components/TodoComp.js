import React from 'react';

const TodoComp = (props) => {
    let listItems = props.entries.map((entry,index) => <li key={index}>{entry.text}</li>)

    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default TodoComp;






