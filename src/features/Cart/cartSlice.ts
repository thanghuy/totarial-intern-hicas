import { createSlice } from '@reduxjs/toolkit';

interface CartState{
    amount: number;
    total: number;
    subTotal: number;
    tax: number;
    data: Array<any>;
}
const initialState: CartState = {
    amount : 0,
    total: 0,
    subTotal: 0,
    tax: 0,
    data:[]
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
        },
        updateDataCart : (state , action) =>{
            state.data = action.payload;
        }
    }
})

export const {updateItemCart, updateDataCart} = cartSlice.actions;
export default cartSlice.reducer;
