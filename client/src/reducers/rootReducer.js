import { combineReducers } from 'redux';
import userReducer from './userReducer';
import bookReducer from './bookReducer';
import noteReducer from './noteReducer';

export default combineReducers({ userReducer, bookReducer, noteReducer });
