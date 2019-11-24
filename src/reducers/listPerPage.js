import * as types from '../constants/ActionTypes'

var initialState = []

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_LISTPERPAGE:
            return [...action.listPerPage]
        default:
            return state
    }
}

export default reducer