import { createStore,combineReducers,applyMiddleware } from 'redux'
import { carReducer } from './reducers/carReducer'
import thunk from 'redux-thunk'


const rootReducer= combineReducers({
    cars:carReducer
})

export default createStore(rootReducer,applyMiddleware(thunk))