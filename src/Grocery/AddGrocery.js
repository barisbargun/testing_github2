import React, {useRef} from 'react'
import { FaPlus } from "react-icons/fa";

const AddGrocery = ({ addGrocery }) => {
  const inputRef = useRef();

  return (
    <form className='addGrocery' onSubmit={addGrocery}>
      <fieldset>
        <legend>Add Grocery</legend>
        <div className="addArea">
          <div className="inputArea">
            <label htmlFor='textArea'>Name:</label>
            <input ref={inputRef} name='addInputText' 
            type="text" id="addInputText"/>
          </div>

          <button aria-label='Add Item'
            className="addButton"
            onClick={() => inputRef.current.focus()}>
            <FaPlus />
          </button>

        </div>
      </fieldset>
    </form >
        
  )
}

export default AddGrocery