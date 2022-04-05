import { combineReducers } from "redux";
import auth from './auth';
import addCard from './addCard'

export default combineReducers ({ auth, addCard });
