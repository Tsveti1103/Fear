import { useEffect, useState } from "react";

export default function useFetcher(response,resData, dep=[], state = [], sortData = undefined) {
    const [data, setData] = useState(state);
    useEffect(() => {
        response(resData)
            .then((result) => {
                if (sortData) {
                    result = sortData(result);
                }
                setData(result);
            })
    }, dep);
    return [data, setData]
}
