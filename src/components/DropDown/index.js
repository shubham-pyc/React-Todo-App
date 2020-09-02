import React from 'react'

export default function DropDown(props) {
    return (
        <div class="form-group row mt-2">
            <label class="col-md-4" htmlFor={props.listId}>Bucket</label>
            <select class="col-md-7 form-control" id={props.listId} onChange={props.onSelectChange}>
                {props.bucketNames.map((element, index) => {
                    return <option key={index} selected={element === props.bucketName}>{element}</option>

                })}
            </select>
        </div>
    )
}
