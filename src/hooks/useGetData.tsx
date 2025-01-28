import {useEffect, useState} from "react";


export const useGetData = <T,> (dataToGet:()=>Promise<T>,defaultValue:T) => {
    const [data, setData] = useState<T>(defaultValue)

    useEffect(() => {
        dataToGet().then((value:T)=> setData(value));
    }, []);

    return {data,setData}
}