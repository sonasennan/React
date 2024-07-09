import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../API/mart';


const initialState={
    status:'idle',
    data:[],
};

export const getProductData = createAsyncThunk(
    'productData/fetchProducts',
    async () =>
        {
            const response = await fetchProducts();
            console.log(response,"response")
            return response;
        },
);


const productDataSlice = createSlice(
    {
        name:'productData',
        initialState: initialState,
        reducers : {},
        extraReducers : (builder) => {
            builder
            .addCase(getProductData.pending, (state) => {
                state.status="pending";})


            .addCase(getProductData.fulfilled, (state,action) =>
                {
                    state.status='succeeded';
                    console.log(action,"Action");
                    state.data=action.payload;
                })


            .addCase(getProductData.rejected, (state) =>
                {
                    state.status='failed';
                });
        }
    }
);

export default productDataSlice.reducer;