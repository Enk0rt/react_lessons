import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {IUser} from "../../../models/user/IUser.ts";
import {PostComplex} from "../../post/post-complex/PostComplex.tsx";

interface UserFullProps {
    item: IUser
}

export const UserComplex = ({item}: UserFullProps) => {
    const posts = useAppSelector(state => state.postSlice.posts);

    return (
        <div className={'mt-6 bg-amber-200 bg-opacity-30'}>
            {item.id} -- {item.name}
            <h2>Posts:</h2>
            {
                posts.map(post => post.userId === item.id && <PostComplex key={post.id} item={post}/>)
            }

        </div>
    );
};

