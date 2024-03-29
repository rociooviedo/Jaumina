import {combineReducers} from 'redux'
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllBebidasReducer} from './reducers/BebidasReducers'
import {cartReducer} from './reducers/cartReducers'
import {registerUserReducer} from './reducers/userReducers'
import {loginUserReducer} from './reducers/userReducers' 
import { placeOrderReducer, getUserOrdersReducer ,getAllOrdersReducer  } from './reducers/orderReducer'
const finalReducer = combineReducers({
    getAllBebidasReducer : getAllBebidasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getUserOrdersReducer : getUserOrdersReducer,
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const inicialState = {
    cartReducer : {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, inicialState, composeEnhancers(applyMiddleware(thunk)))

export default store;