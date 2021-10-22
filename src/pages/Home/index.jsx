import React from 'react';
import { Container, List, BreadCrumb } from './styled';
import Card from "../../components/Card";
import useData from '../../hooks/useData';

const Home = ({ search }) => {

  const data = useData(search, "search")

  return <>
    {data?.results?.length > 0 && <Container>
      <BreadCrumb>
        {data?.filters[0]?.values[0]?.path_from_root?.map(item => <p className="item" key={item.id}>{item.name}</p>)}
      </BreadCrumb>
      <List>
        {data?.results?.slice(0, 4).map(item => <Card item={item} />)}
      </List>
    </Container>}
  </>
}

export default Home