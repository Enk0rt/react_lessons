export const dataApi = async (url:string) =>{
    return await fetch(url).then(response => response.json())
}

