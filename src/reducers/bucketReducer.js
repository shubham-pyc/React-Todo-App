
import { _ADD_NEW_BUCKET_NAME, _DELETE_BUCKET_NAME } from "../components/BucketManager/action"

const initialState = [
    'Default'
]

export function reducer(state = initialState, action) {
    var newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        case _ADD_NEW_BUCKET_NAME:
            if (!newState.includes(action.name)) {
                newState.push(action.name);
            }
            return newState;
        case _DELETE_BUCKET_NAME:
            return newState.filter((element) => element !== action.name)

        default: return state
    }
}

