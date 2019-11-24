import * as types from '../constants/ActionTypes'

var initialState = "null"

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_DETAIL:
            return action.item
        default:
            return state
    }
}

export default reducer