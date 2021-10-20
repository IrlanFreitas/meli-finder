import React, { useEffect, useState } from 'react';
import { Container, List, BreadCrumb } from './styled';
import Card from "../../components/Card";

const Home = ({ search }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    if (search !== "") {
      async function fetchData() {
        await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
          .then(response => response.json())
          .then(data => setData(data?.results?.slice(0, 4)));
      }

      fetchData()
    }

  }, [search])

  return (
    <Container>
      <BreadCrumb /> 
      <List>
        <Card />
      </List>
    </Container>
  )
}

export default Home