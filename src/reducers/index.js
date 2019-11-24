import {combineReducers} from 'redux'
import list from './list'
import categoryCurrent from './categoryCurrent'
import categories from './categories'
import itemDetail from './itemDetail'
import cart from './cart'
import itemPerPage from './itemPerPage'
import page from './page'
import listPerPage from './listPerPage'

const reducers = combineReducers({
    list,
    categoryCurrent,
    categories,
    itemDetail,
    cart,
    itemPerPage,
    page,
    listPerPage,
})

export default reducers;