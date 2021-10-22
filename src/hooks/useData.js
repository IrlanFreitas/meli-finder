import { useEffect, useState, useCallback } from 'react';

const useData = (search, type, description = false) => {

    const [data, setData] = useState();

    const urls = useCallback(
        (type) => {
            const url = {
                search: "https://api.mercadolibre.com/sites/MLA/search?q=",
                items: "https://api.mercadolibre.com/items/"
            }
            return url[type]
        },
        [],
    )

    useEffect(() => {

        console.log("search", search)

        if (search !== "") {
            async function fetchData() {
                await fetch(`${urls(type)}${search}${description ? "/description" : ""}`)
                    .then(response => response.json())
                    .then(result => {
                        setData(result); 
                    });
            }

            fetchData()
        } else {
            setData({})
        }

    }, [description, search, type, urls])

    return data 
}

export default useData