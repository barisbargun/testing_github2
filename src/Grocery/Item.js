import React from 'react'
import { FaTrash } from "react-icons/fa";

const Item = ({ item, changeCheck, deleteGrocery }) => {
    return (
        <li key={item.id} className="listArea">
            <input type="checkbox" checked={item.checked}
                className="checkboxArea" onChange={() => changeCheck(item.id)} />
            <p style={(item.checked) ? { textDecoration: "line-through" } : null}>{item.name} {item.id}</p>
            <FaTrash role="button"
                className="buttonArea"
                tabIndex="0"
                onClick={() => deleteGrocery(item.id)}
                aria-label = {`Delete ${item.name}`}></FaTrash>
        </li>
    )
}

export default Item