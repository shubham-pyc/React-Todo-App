import React from 'react'
import { CHANGE_TODO_TEXT_ACTION, TOGGLE_TASK_STATUS_ACTION, DELTE_TASK_ACTION } from './action'
import { connect } from 'react-redux'
import { uuidv4 } from '../../utils'


const TodoItem = (props) => {

    const onChangeHandler = (event) => {
        props.dispatchChangeTodoText(props.listId, props.id, event.target.value);
    }

    const onStatusChangeHandler = (event) => {
        props.dispatchToggleTaskState(props.listId, props.id, event.target.checked)
    }


    const onDeleteHandler = () => {
        props.dispatchDeleteTask();
    }


    var checkbox_id = uuidv4();
    return (
        <div className="row mb-2">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id={checkbox_id} onChange={onStatusChangeHandler} checked={props.isDone}/>
                <label class="custom-control-label" htmlFor={checkbox_id}></label>
            </div>

            <input type="text" class=" col-sm-10 form-control" placeholder="Add new" onChange={onChangeHandler} value={props.todo} disabled={props.isDone}></input>

            <button type="button" class="close col-sm-1" aria-label="Close" onClick={onDeleteHandler}>
                <span aria-hidden="true">&times;</span>
            </button>


        </div>
    )
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        dispatchChangeTodoText: (listId, taskId, todo) => {
            dispatch(CHANGE_TODO_TEXT_ACTION(listId, taskId, todo))
        },
        dispatchToggleTaskState: (listId, taskId, isDone) => {
            dispatch(TOGGLE_TASK_STATUS_ACTION(listId, taskId, isDone))
        },
        dispatchDeleteTask: () => {
            dispatch(DELTE_TASK_ACTION(ownProps.listId, ownProps.id))
        }
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);
