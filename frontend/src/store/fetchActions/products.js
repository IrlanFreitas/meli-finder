import api from '../../services/api';
import { detailProduct, listProducts, breadCrumbProduct, typeProduct, termProduct } from '../ducks/products';

export const getAll = (term) => {
	return (dispatch) => {
		api
			.get(`/sites/MLA/search?q=${term}`)
			.then((res) => {
				dispatch(listProducts(res.data.results?.slice(0, 4)));
				dispatch(breadCrumbProduct(res.data.filters[0].values[0]?.path_from_root));
			})
			.catch(console.log);
	};
};

export const getInfo = (term) => {
	return async (dispatch) => {
		try {
			const info = await api.get(`/items/${term}`)
			const description = await api.get(`/items/${term}/description`)
			dispatch(detailProduct({ ...info.data, plain_text: description.data.plain_text} ))

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