import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../API/userData';

const initialState = {
    status:'pending',
    data:[],
};


export const getUserData = createAsyncThunk(
    'userData/fetchUsers',
    async () =>
        {
            const response = await fetchUsers();
            console.log(response,"response");
            return response;
        },
);


const userDataSlice = createSlice(
    {
        name:'userData',
        initialState: initialState,
        reducers : {},
        extraReducers:(builder) => {
            builder
            .addCase(getUserData.pending, (state) =>
            {
                console.log("pending");
                state.status='pending..';
            })

            .addCase(getUserData.fulfilled, (state,action) =>
            {
                state.status='succeeded';
                console.log(action,"Action");
                state.data=action.payload;
            })

            .addCase(getUserData.rejected, (state) =>
            {
                state.status='failed';
            });

        }


    }
)


export default userDataSlice.reducer;

