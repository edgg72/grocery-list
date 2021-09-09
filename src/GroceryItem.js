import React from 'react'

export const GroceryItem = ({name, clickHandler, className}) => {
    
    return (
        <div className="grocery" >
            <button 
                type="button"
                id={name}
                value={name}
                onClick={() => clickHandler(name)}
                className={className}
            >+</button>
            <label htmlFor={name}>{name}</label>
        </div>
    )
}
