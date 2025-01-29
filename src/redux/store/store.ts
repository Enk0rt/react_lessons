import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slices/user-slice/UserSlice.ts";
import {postSlice} from "../slices/post-slice/PostSlice.ts";
import {commentSlice} from "../slices/comment-slice/CommentSlice.ts";

export const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer,
    }
})
