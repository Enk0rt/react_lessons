import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../../models/user/IUser.ts";
import {getData} from "../../../api/getData/getData.ts";
import {urls} from "../../../constants/urls.ts";

type UserSliceType = {
    users: IUser[],
}
const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_,thunkAPI)=>{
        return thunkAPI.fulfillWithValue(await getData<IUser[]>(urls.users));
    })


export const initialStateUser: UserSliceType = {users: []};
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialStateUser,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state,action) => {
            state.users = action.payload
        }
    )

});

export const userSliceActions = {
    ...userSlice.actions,loadUsers
}
