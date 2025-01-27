import {useContext} from "react";
import {CarsContext} from "../context/Context.tsx";

export const useChangeThemeAndRefetch = () => {
    const context = useContext(CarsContext);
    if (!context) {
        throw new Error("useCars must be used within CarsProvider");
    }
    return context;
};