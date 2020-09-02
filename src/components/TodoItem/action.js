export const _CHANGE_TODO_TEXT = "CHANGE_TODO_TEXT";
export const _TOGGLE_TASK_STATUS = "TOGGLE_TASK_STATUS";
export const _DELTE_TASK = "DELETE_TASK";

export function CHANGE_TODO_TEXT_ACTION(listId, taskId, todo) {
    return {
        type: _CHANGE_TODO_TEXT,
        listId: listId,
        taskId: taskId,
        todo: todo
    }
}

export function TOGGLE_TASK_STATUS_ACTION(listId, taskId, isDone) {
    return {
        type: _TOGGLE_TASK_STATUS,
        listId,
        taskId,
        isDone
    }
}

export function DELTE_TASK_ACTION(listId, taskId) {
    return {
        type: _DELTE_TASK,
        listId,
        taskId
    }
}