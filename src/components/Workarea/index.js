import React from 'react';
import { connect } from 'react-redux'
import BucketManager from "../BucketManager";
import TodoList from "../TodoList"
import { Card } from "../Card";
import { ADD_NEW_TODO_LIST_ACTION } from "./actions"


const Workarea = (props) => {

  const addNewTodoList = () => {
    props.dispatchAddNewTodoList();
  }



  return (
    <div className="container-fluid">
      <div className="p-5">
        <h1 className="text-center mb-5 row"> <span className="col-md-12 float-left"> Todo Lists <Card clickHandler={addNewTodoList} /></span>   </h1>
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
    dispatchAddNewTodoList: () => dispatch(ADD_NEW_TODO_LIST_ACTION())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Workarea);
