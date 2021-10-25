import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"

import products from './ducks/products'

const reducer = combineReducers({
    products
})

export default createStore(reducer, applyMiddleware(thunk))