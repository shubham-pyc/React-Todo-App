import React, { useState } from 'react';
import { connect } from 'react-redux'
import { ADD_NEW_BUCKET_NAME_ACTION, DELETE_BUCKET_NAME_ACTION } from "./action";

import "./BucketManager.css";
const BucketAdder = (props) => {

    const [bucketName, setBucketName] = useState('');

    const handleClick = () => {
        setBucketName('');
        if (bucketName.length) {
            props.dispatchAddNewBucketName(bucketName);
        }

    }

    const deleteBucketName = (event) => {

        const attribute = event.target.getAttribute('bucketName')
        if (attribute !== "Default") {
            props.dispatchDeleteBucketName(attribute)
        }


    }




    return (
        <div className="col-md-3 mb-2">
            <div className="card todo-card">

                <div className="card-body">
                    <h5 className="card-title" >My Buckets</h5>
                    <div className="row">
                        <div className="col-md-8">
                            <input className="form-control" onChange={(event) => setBucketName(event.target.value)} value={bucketName}></input>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary" onClick={handleClick}>Add</button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {props.bucketNames.map((name, index) => {
                            return <span key={index} className="bucket-name badge badge-pill badge-secondary m-2" bucketname={name} onClick={deleteBucketName}>{name}</span>
                        })}
                    </div>


                </div>
            </div>
        </div>

    );

}


const mapDispatchToProps = function (dispatch) {
    return {
        dispatchAddNewBucketName: (name) => dispatch(ADD_NEW_BUCKET_NAME_ACTION(name)),
        dispatchDeleteBucketName: (name) => dispatch(DELETE_BUCKET_NAME_ACTION(name))
    }
}

const mapStateToProps = function (state) {
    return {
        bucketNames: state.bucketNames
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketAdder);
