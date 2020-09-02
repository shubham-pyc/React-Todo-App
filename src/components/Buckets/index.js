import React from 'react';
import { connect } from 'react-redux'
import BucketManager from "../BucketManager";
import TodoList from "../TodoList"
import { Card } from "../Card";
import { addNewBucketAction } from "./actions"


const Buckets = (props) => {

  const addNewBucket = () => {
    props.addBucket();
  }



  return (
    <div className="container-fluid">
      <div className="p-5">
        <h1 className="text-center mb-5 row"> <span className="col-md-12 float-left"> Todo Lists <Card clickHandler={addNewBucket} /></span>   </h1>
        <div className="row">
          <BucketManager />

          {Object.keys(props.buckets).map(id => {
            return <TodoList key={id} listId={id} title={props.buckets[id].name} bucketName={props.buckets[id].bucketName} />
          })}

        </div>
      </div>

    </div >
  );

}


const mapStateToProps = function (state) {
  return {
    name: state.name,
    buckets: state.buckets
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    addBucket: () => dispatch(addNewBucketAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buckets);
