import React, { Component } from 'react'
import TodoItem from "../TodoItem"
import DropDown from "../DropDown"
import { ADD_TASK_ACTION, EDIT_TITLE_ACTION, DELETE_LIST_ACTION, SET_BUCKET_NAME_ACTION } from "./actions";
import { uuidv4 } from "../../utils";
import { connect } from 'react-redux'
import "./TodoList.css"

class TodoList extends Component {


    constructor() {
        super();
        this.state = {
            isEditing: false
        }
    }

    addTask = () => {
        let id = uuidv4()

        this.props.addTask(this.props.listId, id, {
            todo: "",
            isDone: false,
            isDeleted: false
        });
    }

    initiateTitleChange = () => {
        this.setState({ isEditing: true });
    }

    handleTitleChange = (event) => {
        this.props.editTitle(this.props.listId, event.target.value);
    }

    handleFocusChange = () => {
        this.setState({ isEditing: false });
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.setState({ isEditing: false });
        }

    }

    handleListDelete = () => {
        console.warn("here");
        this.props.dispatchDeleteList();
    }

    handleBucketNameChange = (event) => {
        //console.warn("Hello", event.target.value);
        this.props.dispatchSetBucketName(event.target.value);
    }

    getTitleSpace = () => {
        if (this.state.isEditing) {
            return <input value={this.props.title} class="form-control title-input" onChange={this.handleTitleChange} onKeyPress={this.handleKeyPress} onBlur={this.handleFocusChange}></input>
        } else {
            return <h5 className="card-title mb-5"><span className="card-title-cur" onClick={this.initiateTitleChange}>{this.props.title}</span> <span className="badge badge-pill badge-secondary float-right">{this.props.bucketName}</span> </h5>
        }
    }





    render() {
        const className = "col-md-3 mb-2"


        return (

            <div className={className}>

                <div className="card todo-card">
                    <button type="button" class="close offset-sm-11 col-sm-1 right" aria-label="Close" onClick={this.handleListDelete}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="card-body m-2">
                        {this.getTitleSpace()}

                        {Object.keys(this.props.list.todoList).map(id => {
                            return <TodoItem key={id} listId={this.props.listId} id={id} {...this.props.list.todoList[id]} ></TodoItem>
                        })}

                        <DropDown {...this.props} onSelectChange={this.handleBucketNameChange} />

                    </div>
                    <button className="btn btn-primary" onClick={this.addTask}>Add Task</button>
                </div>
            </div>

        )

    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        list: state.buckets[ownProps.listId],
        bucketNames: state.bucketNames
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        addTask: (listId, id, task) => {
            dispatch(ADD_TASK_ACTION(listId, id, task))
        },
        editTitle: (listId, title) => {
            dispatch(EDIT_TITLE_ACTION(listId, title))
        },
        dispatchDeleteList: () => {
            dispatch(DELETE_LIST_ACTION(ownProps.listId));
        },
        dispatchSetBucketName: (bucketName) => {
            dispatch(SET_BUCKET_NAME_ACTION(ownProps.listId, bucketName));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
