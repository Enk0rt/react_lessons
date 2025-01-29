import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {PostItem} from "../post-item/PostItem.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {postSliceActions} from "../../../redux/slices/post-slice/PostSlice.ts";

export const PostList = () => {
    const {posts} = useAppSelector(({postSlice}) => postSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(!posts.length) dispatch(postSliceActions.loadPosts())
    }, []);

    return (
        <div>
            {
                posts.map(post => <PostItem key={post.id} item={post}/>)
            }
        </div>
    );
};

