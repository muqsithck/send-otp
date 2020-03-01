import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
