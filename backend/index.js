const express = require('express');
const axios = require('axios');
const https = require('https')

const server = express();

server.use(express.json());

const apis = {
    search: "https://api.mercadolibre.com/sites/MLA/search?q=",
    seller: "https://api.mercadolibre.com/sites/MLA/search?seller_id=",
    detail: "https://api.mercadolibre.com/items/"
}

const formatData = (data) => {
    return {
        author: {
            name: "",
            lastname: ""
        },
        categories: data?.filters.length > 0 ? data?.filters[0]?.values[0]?.path_from_root : [],
        items: []
    }
}

server.get('/items', async (req, res) => {

    const { search } = req.query;

    const result = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)

    result?.filters[0]?.values[0]?.path_from_root

    res.send(result.data?.results?.splice(0, 1))

    // res.send(result)
})

server.get('/items/:id', (req, res) => {
    const { id } = req.params;

    res.json({ message: "Hello world" })
})

server.listen(3000);