import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {commentSliceActions} from "../../../redux/slices/comment-slice/CommentSlice.ts";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {Comment} from "../comment-item/Comment.tsx";

export const CommentList = () => {
    const {comments} = useAppSelector(({commentSlice}) => commentSlice);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(commentSliceActions.loadComments())
    }, []);
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} item={comment}/>)
            }
        </div>
    );
};

