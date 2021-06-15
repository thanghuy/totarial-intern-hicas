  
import { combineReducers } from 'redux';
import counterReducer from '../features/counter/counterSlice';
const RootReducer = combineReducers({
    counter: counterReducer,
});

export default RootReducer;