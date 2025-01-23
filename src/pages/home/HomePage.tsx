import {Menu} from "../../components/menu/Menu.tsx";

export const HomePage = () => {
    return (
        <div>
            <Menu/>
            <div className={'w-4/5 mx-auto'}>
                <div className={'h-96 flex justify-center items-center'}>
                    <h2>Home</h2>
                </div>
            </div>
        </div>
    );
};

