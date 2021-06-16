  
import { combineReducers } from 'redux';
import Auth from '../features/auth/authSlice';
const RootReducer = combineReducers({
    auth : Auth
});

export default RootReducer;