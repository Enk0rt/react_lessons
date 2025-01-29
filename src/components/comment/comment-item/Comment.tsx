import {IComment} from "../../../models/comment/IComment.ts";

interface CommentProps {
    item: IComment
}

export const Comment = ({item}: CommentProps) => {
    return (
        <div className={'bg-gray-500 bg-opacity-50 mt-2'}>
            <h2>{item.id} -- {item.name}</h2>
            <p>item{item.body}</p>
            <br/>
        </div>
    );
};

