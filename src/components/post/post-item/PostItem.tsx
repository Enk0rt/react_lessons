import {IPost} from "../../../models/post/IPost.ts";
import {memo} from "react";

interface PostItemProps {
    item: IPost
}

export const PostItem = memo(({item}: PostItemProps) => {

    return (
        <div className={'bg-emerald-200 bg-opacity-20 mt-2'}>
            {item.id} -- {item.body}
        </div>
    );
})

