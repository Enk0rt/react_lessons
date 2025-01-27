import {useChangeThemeAndRefetch} from "../../hooks/useChangeThemeAndRefetch.tsx";

export const HomePage = () => {
    const {theme}=useChangeThemeAndRefetch();

    return (
        <div className={`home--${theme}`}>
            <div className={'w-4/5 h-89 mx-auto'}>
                <div className={'h-96 flex justify-center items-center'}>
                    <h2>Home</h2>
                </div>
            </div>
        </div>
    );
};

