import { useEffect, useState } from "react";

export default function useFetcher(response,dep,state=[]){
    const [data, setData] = useState(state);
    useEffect(() => {
        response
            .then((result) => {
                setData(result);
            })
    }, dep);
    return [data,setData]
}
