import {Link} from "react-router-dom";
import {AppRoutes} from "../../routes/const.ts";
import {Modal} from "../modal/Modal.tsx";
import {Dispatch, SetStateAction, useState} from "react";
import {Form} from "../form/Form.tsx";

type MenuProps = {
    setShouldRefetch : Dispatch<SetStateAction<boolean>>;
}

export const Menu = ({setShouldRefetch}:MenuProps) => {

    const [active, setActive] = useState<boolean>(false)

    return (
        <div>
            <div className={'w-4/5 flex justify-end relative mx-auto '}>
                <ul className={'flex gap-10 justify-between mt-6'}>
                    <Link to={AppRoutes.root}>
                        <li  className={'block border w-20 px-4 py-1 text-center hover:bg-gray-50 hover:bg-opacity-20 transition'}>Home</li>
                    </Link>
                    <Link to={AppRoutes.cars}>
                        <li className={' block border w-20 py-1 text-center hover:bg-gray-50 hover:bg-opacity-20 transition'}>Cars</li>
                    </Link>
                    <li className={' block border w-20 py-1 text-center hover:bg-gray-50 hover:bg-opacity-20 transition'}>
                        <button onClick={()=>setActive(true)}>Add Car</button>
                    </li>
                </ul>
            </div>
            <Modal active={active} setActive={setActive} children={
                <Form setActive={setActive} setShouldRefetch={setShouldRefetch}/>
            }/>
        </div>
    );
};

