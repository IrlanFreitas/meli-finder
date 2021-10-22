import React from 'react';
import { Container } from './styled';

const BreadCrumb = ({ breadCrumb }) => {

    return <>  
        <Container>
            {breadCrumb?.map(item => <p className="item" key={item.id}>{item.name}</p>)}
        </Container>
    </>

}

export default BreadCrumb