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

export const changeDetail = (item) => {
    return {
        type: types.CHANGE_DETAIL,
        item
    }
}

export const changeList = (list) => {
    return {
        type: types.CHANGE_LIST,
        list
    }
}
