import { createSlice } from '@reduxjs/toolkit';

interface CartState{
    amount: number;
    total: number;
    subTotal: number;
    tax: number;
}
const initialState: CartState = {
    amount : 0,
    total: 0,
    subTotal: 0,
    tax: 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        updateItemCart : (state, action) =>{
            state.amount = action.payload.amount;
            state.total = action.payload.total;
            state.subTotal = action.payload.subTotal;
            state.tax = action.payload.tax;
        }
    }
})

export const {updateItemCart} = cartSlice.actions;
export default cartSlice.reducer;
