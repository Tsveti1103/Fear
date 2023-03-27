import { useEffect, useState } from "react";

export function useFetcher(response,dep,state=[]){
    const [data, setData] = useState(state);
    useEffect(() => {
        response
            .then((result) => {
                setData(result);
            })
    }, dep);
    return [data,setData]
}
