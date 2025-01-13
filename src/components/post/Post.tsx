import {FC} from "react";
import {IPost} from "../../models/posts/IPost.ts";

type MyPostType={
    item:IPost;
}

export const Post:FC<MyPostType> = ({item}:MyPostType) => {
    return (
        <div className='flex flex-col justify-between bg-green-300 bg-opacity-50 p-5'>
            <div>
                <h2>Topic: <span className='underline underline-offset-2 font-medium'>{item.title}</span></h2>
                <p className='mt-3'>{item.body}</p>
            </div>
            <div className='flex gap-5 mt-6'>
                <p>Likes: {item.reactions.likes}</p>
                <p>Dislikes: {item.reactions.dislikes}</p>
            </div>
        </div>
    );
};
