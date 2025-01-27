import {createContext, Dispatch, SetStateAction} from "react";

type MyContextType ={
    theme:string,
    setTheme: (obj:string)=> void,
    shouldRefetch:boolean,
    setShouldRefetch: Dispatch<SetStateAction<boolean>>,
}

export const CarsContext = createContext<MyContextType | null>(null)



