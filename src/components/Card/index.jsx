import React from 'react'
import { Container, Image, Data, Address } from "./styled";

export default function Card({ item }) {

    return (
        <Container key={item?.id} to={`/details/${item?.id}`}>
            <Image src={item?.thumbnail} />
            <Data>
                <p style={{
                    paddingBottom: 20,
                    fontSize: 25
                }}>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(item?.price / 100)}</p>
                <p style={{ fontSize: 20 }}>{item?.title}</p>
            </Data>
            <Address>
                {item?.address?.state_name}
            </Address>
        </Container>
    )
}
