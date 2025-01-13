import {useEffect, useState} from "react";
import {IPost} from "../../models/posts/IPost.ts";
import {dataApi} from "../../api/dataApi.ts";
import {IPostsResponse} from "../../models/posts/IPostsResponse.ts";
import {urls} from "../../const/const.ts";
import {Post} from "../post/Post.tsx";

export const PostsList = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        dataApi(urls.posts).then(({posts}:IPostsResponse)=> setPosts(posts))
    }, []);
    return (
        <div className='mt-14 wrapper'>
            <div className="grid grid-cols-2 gap-14">
                {
                    posts.map(post => <Post key={post.id} item={post}/>)
                }
            </div>
        </div>
    );
};
