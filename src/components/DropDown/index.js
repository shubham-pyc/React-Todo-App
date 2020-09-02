import React from 'react'

export default function DropDown(props) {
    return (
        <div className="form-group row mt-2">
            <label className="col-md-4" htmlFor={props.listId}>Bucket</label>
            <select className="col-md-7 form-control" id={props.listId} onChange={props.onSelectChange}>
                {props.bucketNames.map((element, index) => {
                    return <option key={index} selected={element === props.bucketName}>{element}</option>

                })}
            </select>
        </div>
    )
}
