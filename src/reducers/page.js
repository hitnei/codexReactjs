import * as types from '../constants/ActionTypes'

var initialState = 1

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_PAGE:
            return action.ind+1
        default:
            return state
    }
}

export default reducer