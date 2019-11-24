import * as types from '../constants/ActionTypes'

var initialState = 1

var reducer = (state = initialState, action) => {
    switch (action.types) {
        // case types.RESET_CATEGORY_CURRENT:
        //     return 0
        default:
            return state
    }
}

export default reducer