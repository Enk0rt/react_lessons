import PostItem from "../../post/post-item/PostItem.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {IUser} from "../../../models/user/IUser.ts";

interface UserFullProps {
    item: IUser
}

export const UserFull = ({item}: UserFullProps) => {
    const posts = useAppSelector(state => state.postSlice.posts);

    return (
        <div className={'mt-6 bg-amber-200 bg-opacity-30'}>
            {item.id} -- {item.name}
            <h2>Posts:</h2>
            {
                posts.map(post => post.userId === item.id && <PostItem key={post.id} item={post}/>)
            }

        </div>
    );
};

