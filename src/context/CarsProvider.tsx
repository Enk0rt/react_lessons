import * as React from "react";
import {useState} from "react";
import {CarsContext} from "./Context.tsx";

export const CarsProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const [shouldRefetch, setShouldRefetch] = useState<boolean>(false)
    const [theme,setTheme] = useState<string>('Dark')
    return(
        <CarsContext.Provider value={{theme,setTheme,shouldRefetch, setShouldRefetch}}>
            {children}
        </CarsContext.Provider>
    )
}