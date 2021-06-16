  
import { combineReducers } from 'redux';
import Auth from '../features/auth/authSlice';
import cartSlice from '../features/Cart/cartSlice';
const RootReducer = combineReducers({
    auth : Auth,
    cart : cartSlice
});

export default RootReducer;