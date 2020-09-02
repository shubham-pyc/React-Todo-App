export const _ADD_TASK = "ADD_TASK";
export const _EDIT_TITLE = "EDIT_TITLE"
export const _DELETE_LIST = "DELETE_LIST"
export const _SET_BUCKET_NAME = "SET_BUCKET_NAME"


export function ADD_TASK_ACTION(listId, taskId, payload) {
    return {
        type: _ADD_TASK,
        listId,
        taskId,
        payload
    }
}

export function EDIT_TITLE_ACTION(listId, title) {
    return {
        type: _EDIT_TITLE,
        listId,
        title,
    }
}


export function DELETE_LIST_ACTION(listId) {
    return {
        type: _DELETE_LIST,
        listId,

    }
}

export function SET_BUCKET_NAME_ACTION(listId, bucketName) {
    return {
        type: _SET_BUCKET_NAME,
        listId,
        bucketName,

    }
}
