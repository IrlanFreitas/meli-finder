/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Container, List } from './styled';
import { useSelector } from 'react-redux';
import Card from "../../components/Card";
import BreadCrumb from "../../components/BreadCrumb";
import useData from '../../hooks/useData';

const Home = ({ search }) => {

  useData(search, "search")

  const products = useSelector((state) => state.products);

  return <>
    {products?.results?.length > 0 && <Container>
      <BreadCrumb />
      <List>
        {products?.results?.slice(0, 4).map(item => <Card key={item?.id} item={item} />)}
      </List>
    </Container>}
  </>
}

export default Home