import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import PostItem from "../post-item/PostItem.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../../../redux/slices/post-slice/PostSlice.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";

export const PostList = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
            dispatch(postSliceActions.loadPosts())
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostItem key={post.id} item={post}/>)
            }
        </div>
    );
};

