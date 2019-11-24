import * as types from '../constants/ActionTypes'

var initialState = [
    {
        id: 1,
        category: "Shirts",
    },
    {
        id: 2,
        category: "Dresses",
    },
    {
        id: 3,
        category: "Shorts",
    },
    {
        id: 4,
        category: "Jackets",
    },
]

var reducer = (state = initialState, action) => {
    switch (action.types) {
        // case types.RESET_CATEGORY_CURRENT:
        //     return 0
        default:
            return state
    }
}

export default reducer