import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll, getInfo } from '../store/fetchActions/products'

const useData = () => {

    const dispatch = useDispatch();
    const { term, type } = useSelector(state => state.products);

    /**
    // const [data, setData] = useState();

    // const urls = useCallback(
    //     (type) => {
    //         const url = {
    //             search: "https://api.mercadolibre.com/sites/MLA/search?q=",
    //             items: "https://api.mercadolibre.com/items/"
    //         }
    //         return url[type]
    //     },
    //     [],
    // )

    // useEffect(() => {

    //     if (search !== "") {
    //         async function fetchData() {
    //             await fetch(`${urls(type)}${search}${description ? "/description" : ""}`)
    //                 .then(response => response.json())
    //                 .then(result => {
    //                     setData(result); 
    //                 });
    //         }

    //         fetchData()
    //     } else {
    //         setData({})
    //     }

    // }, [description, search, type, urls])
    */

    useEffect(() => {
        console.log("useData")
        if (type === "all") { 
            dispatch(getAll(term))
        }

    }, [dispatch, term, type]);

    useEffect(() => {

        if (type === "detail") { 
            dispatch(getInfo(term))
        }

    }, [dispatch, term, type]);

}

export default useData