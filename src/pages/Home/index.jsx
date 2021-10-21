import React from 'react';
import { Container, List } from './styled';
import Card from "../../components/Card";
import useData from '../../hooks/useData';

const Home = ({ search }) => {

  const data = useData(search, "search")

  console.log(data)

  return <>
    {data?.results?.length > 0 && <Container>
      <List>
        {data?.results?.slice(0, 4).map(item => <Card item={item} />)}
      </List>
    </Container>}
  </>
}

export default Home