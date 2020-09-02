import React from 'react'

export const Card = (props) => {
    const className = "col-md-3 mb-2"
    return (
        <div className={className}>
            <div className="card todo-card" onClick={props.clickHandler}>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>

    )
} 