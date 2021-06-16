import { createSlice } from '@reduxjs/toolkit';

interface CartState{
    item: number;
}
const initialState: CartState = {
    item : 0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        updateItemCart : (state, action) =>{

        }
    }
})

export const {updateItemCart} = cartSlice.actions;
export default cartSlice.reducer;
