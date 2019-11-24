import * as types from './../constants/ActionTypes'

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const resetCategoryCurrent = () => {
    return {
        type: types.RESET_CATEGORY_CURRENT
    }
}

export const addCart = (item) => {
    return {
        type: types.ADD_CART,
        item
    }
}
