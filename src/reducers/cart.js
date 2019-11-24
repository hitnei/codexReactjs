import * as types from '../constants/ActionTypes'

var initialState = JSON.parse(localStorage.getItem("cart"))

var findById = (list, id) => {
    var rs = -1
    list.forEach((item, index) => {
        if (item.id === id) {
            rs = index
        }
    });
    return rs;
}

var reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CART:
            console.log(action)
            var { item } = action
            item.quatity = item.quatity === 0 ? 1 : item.quatity
            var cart = state
            var index = findById(cart, item.id)
            if (index === -1) {
                cart.push(item)
            } else {
                cart[index].quatity++
            }
            localStorage.setItem("cart", JSON.stringify(cart))
            return cart
        default:
            return state
    }
}

export default reducer