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
      <div class="p-5">
        <h1 className="text-center mb-5">Todo Lists</h1>
        <div className="row">
          <BucketManager />

          {Object.keys(props.buckets).map(id => {
            return <TodoList key={id} listId={id} title={props.buckets[id].name} bucketName={props.buckets[id].bucketName} />
          })}

          <Card addMore clickHandler={addNewBucket}>
            <div>Add more</div>
          </Card>
        </div>
      </div>

    </div>
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
