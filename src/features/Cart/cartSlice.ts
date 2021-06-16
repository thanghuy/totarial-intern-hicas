import { createSlice } from '@reduxjs/toolkit';

interface CartState{
    amount: number;
}
const initialState: CartState = {
    amount : 0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        updateItemCart : (state, action) =>{
            state.amount = action.payload;
        }
    }
})

export const {updateItemCart} = cartSlice.actions;
export default cartSlice.reducer;
