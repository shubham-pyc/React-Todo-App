
import { _ADD_NEW_BUTTON_ACTION } from "./actions"
import { _ADD_TASK, _EDIT_TITLE, _DELETE_LIST, _SET_BUCKET_NAME } from "../TodoList/actions"
import { _CHANGE_TODO_TEXT, _TOGGLE_TASK_STATUS, _DELTE_TASK } from "../TodoItem/action"
import { uuidv4 } from "../../utils"
import { _DELETE_BUCKET_NAME } from "../BucketManager/action"
import { DEFAULT } from "./constants";

const initialState = {

}

export function reducer(state = initialState, action) {
    var newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case _ADD_NEW_BUTTON_ACTION:
            newState[uuidv4()] = {
                "name": "Title",
                "bucketName": DEFAULT,
                "todoList": {}
            }
            return newState
        case _ADD_TASK:
            newState[action.listId].todoList[action.taskId] = action.payload
            return newState
        case _DELETE_LIST:
            delete newState[action.listId]
            return newState

        case _SET_BUCKET_NAME:
            newState[action.listId].bucketName = action.bucketName
            return newState

        case _CHANGE_TODO_TEXT:
            newState[action.listId].todoList[action.taskId].todo = action.todo
            return newState

        case _TOGGLE_TASK_STATUS:
            newState[action.listId].todoList[action.taskId].isDone = action.isDone
            return newState

        case _EDIT_TITLE:
            newState[action.listId].name = action.title
            return newState

        case _DELTE_TASK:
            delete newState[action.listId].todoList[action.taskId]
            return newState

        case _DELETE_BUCKET_NAME:
            Object.keys(newState).map((listId) => {
                if (newState[listId].bucketName === action.name) {
                    newState[listId].bucketName = DEFAULT
                }
                return listId
            })
            return newState;


        default: return state
    }
}

