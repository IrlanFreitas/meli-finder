const express = require('express');
const cors = require('cors')
const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.mercadolibre.com'
});

const server = express();

server.use(cors())
server.use(express.json());

const urls = {
    search: "/sites/MLA/search?q=",
    seller: "/sites/MLA/search?seller_id=",
    detail: "/items/",
    description: "/description"
}

const sanitizeListData = (data) => {

    const cleanData = {};

    if (data?.filters?.length > 0 && data?.filters[0]?.values?.length > 0) {
        cleanData.categories = data?.filters[0]?.values[0]?.path_from_root.map(path => path.name)
    } else {
        cleanData.categories = []
    }

    if (data?.results?.length > 4) {
        cleanData.items = data?.results?.slice(0, 4).map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping?.free_shipping,
            location: item?.address?.state_name
        }))
    }

    return cleanData
}

const sanitizeItemData = (detail, description) => {

    const cleanData = {
        id: detail.id,
        title: detail.title,
        price: detail.price,
        condition: detail.condition,
        sold_quantity: detail.sold_quantity,
        link: detail.permalink,
    };

    cleanData.description = description.plain_text

    if (detail?.pictures?.length > 0) {
        cleanData.picture = detail?.pictures[0]?.url
    }

    return cleanData;

}

// * listing
server.get('/items', async (req, res) => {

    const { search } = req.query;

    const result = await api.get(`${urls.search}${search}`)

    res.send(sanitizeListData(result.data))

})

// * details
server.get('/items/:id', async (req, res) => {
    const { id } = req.params;

    const detail = await api.get(`${urls.detail}${id}`)
    const description = await api.get(`${urls.detail}${id}${urls.description}`)

    // console.log("description -- ", description.data.plain_text)
    // const seller = await api.get(`${urls.seller}${detail.data.seller_id}`)

    res.send(sanitizeItemData(detail.data, description.data))
})

server.listen(3000);