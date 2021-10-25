import React from 'react'
import { Container, Image, Data, Address, Shipping } from "./styled";
import transport from "../../assets/img/transport.png";

export default function Card({ item }) {

    return (
        <Container key={item?.id} to={`/details/${item?.id}`}>
            <Image src={item?.picture} />
            <Data>
                <p style={{
                    paddingBottom: 20,
                    fontSize: 25
                }}>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(item?.price / 100)}
                    {item?.free_shipping && <Shipping src={transport}  alt="shipping" /> }
                </p>
                <p style={{ fontSize: 20 }}>{item?.title}</p>
            </Data>
            <Address>
                {item?.location}
            </Address>
        </Container>
    )
}
