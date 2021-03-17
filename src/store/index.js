import { createStore,combineReducers,applyMiddleware } from 'redux'
import { carReducer } from './reducers/carReducer'
import thunk from 'redux-thunk'
import { filterDataReducer } from './reducers/filterDataReducer'

const rootReducer= combineReducers({
    cars:carReducer,
    filters:filterDataReducer
})

export default createStore(rootReducer,applyMiddleware(thunk))