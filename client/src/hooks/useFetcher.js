import { useEffect, useState } from "react";

export default function useFetcher(response, resData, dep = [], state = [], sortData = undefined) {
    const [data, setData] = useState(state);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        response(resData)
            .then((result) => {
                if (sortData) {
                    result = sortData(result);
                }
                setData(result);
                setIsLoad(!isLoad);
            })
            .catch((error) => {
                console.log(error);
                setIsLoad(!isLoad);
            })

    }, dep);
    return [data, setData, isLoad,setIsLoad]
}
