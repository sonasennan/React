import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { postProducts } from "../API/form";

const initialState ={
    status:"idle",
    data:[]
}

export const postFormData = createAsyncThunk(
    "formData/postform",
    async({product}) =>{
            const response = await postProducts(product)
            console.log(response,"response")
            return response;
        }
)


export const FormSlice = createSlice({
    name:"formData",
    initialState:initialState,
    reducer:{},
    extraReducers(builder){
        builder
        .addCase(postFormData.pending,(state)=>{
            state.status = "loading";
        })

        .addCase(postFormData.fulfilled,(state)=>{
            state.status= "succeeded";
        })

        .addCase(postFormData.rejected,(state)=>{
            state.status="failed";
        });

    }
})

export default FormSlice.reducer;
