import {IPost} from "../../../models/post/IPost.ts";
import {memo} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {Comment} from "../../comment/comment-item/Comment.tsx";

interface PostItemProps {
    item: IPost
}

export const PostComplex = memo(({item}: PostItemProps) => {
    const comments = useAppSelector(state=>state.commentSlice.comments);

    return (
        <div className={'bg-emerald-200 bg-opacity-20 mt-2'}>
            {item.id} -- {item.body}
            <h2>Post comments:</h2>
            {
                comments.map(comment => comment.postId === item.id && <Comment key={item.id} item={comment}/>)
            }
        </div>
    );
})