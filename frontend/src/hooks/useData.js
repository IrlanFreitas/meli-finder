import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll, getInfo } from '../store/fetchActions/products'

const useData = () => {

    const dispatch = useDispatch();
    const { term, type } = useSelector(state => state.products);

    useEffect(() => {
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