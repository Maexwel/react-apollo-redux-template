import appReducer from './reducers/reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const stateLogger = store => next => action => {

    let result

    console.log(`dispatching action => `)
    console.log(`ACTION = ${action.type}, PAYLOAD =  ${JSON.stringify(action.payload)}`)
    console.log('Previous state', JSON.stringify(store.getState()))
    result = next(action)

    return result
}

export default () => {
    return applyMiddleware(thunk, stateLogger)(createStore)(appReducer)
}