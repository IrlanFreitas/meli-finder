import api from '../../services/api';
import { detailProduct, listProducts, breadCrumbProduct, typeProduct, termProduct } from '../ducks/products';

export const getAll = (term) => {
	return (dispatch) => {
		api
			.get(`/items`, { params: { search: term } })
			.then((res) => {
				dispatch(breadCrumbProduct(res.data.categories));
				dispatch(listProducts(res.data.items));
			})
			.catch(console.log);
	};
};

export const getInfo = (term) => {
	return async (dispatch) => {
		try {
			const info = await api.get(`/items/${term}`)
			dispatch(detailProduct(info.data))

		} catch (error) {
			console.log(error);
		}
	};

};

export const find = (term, type) => {
	return (dispatch) => {
		dispatch(termProduct(term))
		dispatch(typeProduct(type))
	}
}