import {combineReducers} from 'redux';
import item from './itemReducer';

const mainReducer = combineReducers({
    item
})

export default mainReducer;