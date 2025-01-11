type CallbackFn<T> = (data: T) => void;

export function getData<T>(url:string,fn:CallbackFn<T>):void{
    fetch(url)
        .then(value => value.json())
        .then((response:T) => {
            fn(response);
        })
}