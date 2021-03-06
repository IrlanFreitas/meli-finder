import React from 'react';
import { Container } from './styled';
import { useSelector } from 'react-redux';

const BreadCrumb = () => {

    const { breadCrumb } = useSelector((state) => state.products);

    return <>
        <Container>
            {breadCrumb?.map(item => <p className="item" key={item}>{item}</p>)}
        </Container>
    </>

}

export default BreadCrumb