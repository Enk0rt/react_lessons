import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {dataApi} from "../../api/dataApi.ts";
import {IPostsResponse} from "../../models/IPostsResponse.ts";
import Post from "../post/Post.tsx";
import {urls} from "../../const/const.ts";

export const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        dataApi(urls.posts).then(({posts}:IPostsResponse)=> setPosts(posts))
    }, []);
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} item={post}/>)
            }
        </div>
    );
};
