import {IPost} from "../../../models/post/IPost.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../../api/getData/getData.ts";
import {urls} from "../../../constants/urls.ts";

type PostsSliceType = {
    posts: IPost[],
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_,thunkAPI)=>{
        return thunkAPI.fulfillWithValue(await getData<IPost[]>(urls.posts));
    })

const initialStatePost: PostsSliceType = {posts: []};
export const postSlice = createSlice({
    name: "postSlice",
    initialState: initialStatePost,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state, action) =>{
            state.posts = action.payload
        })
})

export const postSliceActions = {
    ...postSlice.actions,loadPosts
}