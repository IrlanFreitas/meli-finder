import React from 'react'
import { Container, Image } from "./styled";

const resultExample = {
    accepts_mercadopago: true,
    address: { state_id: 'AR-C', state_name: 'Capital Federal', city_id: 'TUxBQlBBTDI1MTVa', city_name: 'Palermo' },
    // attributes: (3)[{… }, {… }, {… }],
    available_quantity: 1,
    buying_mode: "buy_it_now",
    catalog_product_id: null,
    category_id: "MLA455701",
    condition: "new",
    currency_id: "ARS",
    domain_id: "MLA-DIGITAL_PORTABLE_MEDIA_PLAYERS",
    id: "MLA935826998",
    installments: { quantity: 12, amount: 4537.72, rate: 70.17, currency_id: 'ARS' },
    listing_type_id: "gold_special",
    match_score: null,
    offer_score: null,
    offer_share: null,
    official_store_id: 2549,
    order_backend: 1,
    original_price: null,
    permalink: "https://articulo.mercadolibre.com.ar/MLA-935826998-ipod-touch-32gb-silver-_JM",
    price: 31999,
    // prices: { id: 'MLA935826998', prices: Array(1), presentation: {… }, payment_method_prices: Array(0), reference_prices: Array(0), … },
    sale_price: null,
    seller: { id: 553476757, permalink: 'http://perfil.mercadolibre.com.ar/ONECLICK+ARGENTINA', registration_date: '2020-04-22T18:08:50.000-04:00', car_dealer: false, real_estate_agency: false },
    // seller_address: { id: '', comment: '', address_line: '', zip_code: '', country: {… }, … },
    shipping: { free_shipping: true, mode: 'me2', tags: Array(2), logistic_type: 'cross_docking', store_pick_up: false },
    site_id: "MLA",
    sold_quantity: 5,
    stop_time: "2041-08-20T04:00:00.000Z",
    tags: (5)['extended_warranty_eligible', 'good_quality_picture', 'good_quality_thumbnail', 'immediate_payment', 'cart_eligible'],
    thumbnail: "http://http2.mlstatic.com/D_955930-MLA45878166410_052021-O.jpg",
    thumbnail_id: "955930-MLA45878166410_052021",
    title: "iPod Touch 32gb - Silver",
    use_thumbnail_id: false,
    winner_item_id: null,
}

export default function Card() {
    return (
        <Container>
            <Image src={"http://http2.mlstatic.com/D_955930-MLA45878166410_052021-O.jpg"} />
        </Container>
    )
}
