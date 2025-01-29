import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/user-slice/UserSlice.ts";
import {postSliceActions} from "../../redux/slices/post-slice/PostSlice.ts";
import {commentSliceActions} from "../../redux/slices/comment-slice/CommentSlice.ts";

export const useGetAll = () => {
    const {userSlice: {users}, postSlice: {posts}, commentSlice: {comments}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!users.length) dispatch(userSliceActions.loadUsers())
        if (!posts.length) dispatch(postSliceActions.loadPosts())
        if (!comments.length) dispatch(commentSliceActions.loadComments())
    }, []);

    return {users}
}