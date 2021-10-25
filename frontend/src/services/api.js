import axios from 'axios';

export default axios.create({
	// baseURL: 'https://api.mercadolibre.com'
	baseURL: 'http://localhost:3000'
});