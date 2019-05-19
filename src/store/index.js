import { combineReducers } from 'redux'
import reducer from './reducer'
import {createStore} from 'redux'

export default (state) => createStore(reducer, state)
