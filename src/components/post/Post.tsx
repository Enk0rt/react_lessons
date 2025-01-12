import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type MyPostType={
    item:IPost;
}

export const Post:FC<MyPostType> = ({item}:MyPostType) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>
    );
};

export default Post;