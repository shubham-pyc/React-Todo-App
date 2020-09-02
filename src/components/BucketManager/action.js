export const _ADD_NEW_BUCKET_NAME = "ADD_NEW_BUCKET_NAME";
export const _DELETE_BUCKET_NAME = "DELETE_BUCKET_NAME"


export function ADD_NEW_BUCKET_NAME_ACTION(name) {
    return {
        type: _ADD_NEW_BUCKET_NAME,
        name
    }
}

export function DELETE_BUCKET_NAME_ACTION(name) {
    return {
        type: _DELETE_BUCKET_NAME,
        name
    }
}