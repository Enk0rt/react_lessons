import {IComment} from "../../../models/comment/IComment.ts";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "../../../api/getData/getData.ts";
import {urls} from "../../../constants/urls.ts";


export type CommentSliceType = {
    comments:IComment[]
}

const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_,thunkApi) => {
        return thunkApi.fulfillWithValue(await getData<IComment[]>(urls.comments))
    }
)

const initialStateComment:CommentSliceType = {comments:[]}
export const commentSlice = createSlice({
    name:'commentSlice',
    initialState: initialStateComment,
    reducers:{},
    extraReducers: builder =>
        builder.addCase(loadComments.fulfilled, (state, action) => {
            state.comments = action.payload
        })
})

export const commentSliceActions={
    ...commentSlice.actions,loadComments
}