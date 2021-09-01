import {combineReducers} from 'redux'
import eventReducer from '../../features/events/eventReducer'
import testReducer from '../../features/sandbox/testReducer'

export const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
})