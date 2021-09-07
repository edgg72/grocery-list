import React from 'react'

export const GroceryItem = (props) => {
    
    return (
        <div className="grocery" >
            <button 
                type="button"
                id={props.name}
                value={props.name}
                onClick={() => props.clickHandler(props.name)}
            >+</button>
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}
