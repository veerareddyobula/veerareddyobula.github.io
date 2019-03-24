import { combineReducers } from "redux";

import data from "./dataReducer";
import curd from './curdReducer';

export default combineReducers({
  data, curd
});