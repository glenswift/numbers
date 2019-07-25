import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root.reducer'

const enhance = composeWithDevTools

export default createStore(rootReducer, {}, enhance(applyMiddleware(thunk)))