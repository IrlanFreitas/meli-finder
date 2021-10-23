/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Container, List } from './styled';
import Card from "../../components/Card";
import BreadCrumb from "../../components/BreadCrumb";
import useData from '../../hooks/useData';

const Home = ({ search, setBreadCrumb, breadCrumb }) => {

  const data = useData(search, "search")

  useEffect(() => {
    if (data?.filters?.length > 0) {
      setBreadCrumb(data?.filters[0]?.values[0]?.path_from_root)
    }
  }, [])

  

  return <>
    {data?.results?.length > 0 && <Container>
      <BreadCrumb breadCrumb={breadCrumb} />
      <List>
        {data?.results?.slice(0, 4).map(item => <Card key={item?.id} item={item} />)}
      </List>
    </Container>}
  </>
}

export default Home