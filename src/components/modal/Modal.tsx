import './Modal.css'
import {FC, ReactNode} from "react";
import {useChangeThemeAndRefetch} from "../../hooks/useChangeThemeAndRefetch.tsx";

type ModalProps={
    active:boolean,
    setActive: (b: boolean)=>void,
    children: ReactNode;
}

export const Modal:FC<ModalProps> = ({active,setActive,children}) => {
    const {theme} = useChangeThemeAndRefetch();

    return (
        <div>
            <div className={active ? `modal active` : "modal"}>
                <div className="modal__wrapper" onClick={()=>setActive(false)}>
                    <div className={`modal__content modal__content--${theme}`} onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
