import {useSearchParams} from "react-router-dom";
import {FC} from "react";

type Props = {
    skip: number,
    total: number,
}

export const Pagination: FC<Props> = ({skip, total}) => {
    const [query, setQuery] = useSearchParams({limit: '10', skip: '0'});

    const amountHandler = (delta:number) => {
        const skip:number = Number(query.get('skip'))
        setQuery({skip: (skip + delta).toString()})
    }

    return (
        <div className={'flex justify-center gap-4 mt-6'}>
            <button className={'border border-black p-2 px-4 hover:bg-white hover:bg-opacity-50'} onClick={() => amountHandler(-10)} disabled={skip === 0}>prev
            </button>
            <button className={'border border-black p-2 px-4 hover:bg-white hover:bg-opacity-50'} onClick={() => amountHandler(10)} disabled={skip > total - 10}>next
            </button>
        </div>
    );
};

export default Pagination;