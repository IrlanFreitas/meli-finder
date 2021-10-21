import React from 'react'
import {
  useParams
} from "react-router-dom";
import { Container, Data } from "./styled";
import useData from '../../hooks/useData';

const Details = () => {

  const { id } = useParams();

  const data = useData(id, "items")
  const description = useData(id, "items", true)

  // "Deco Reverse" - data.title
  // "$ 1.98000" - data.price
  // "Nuevo" - data.condition 
  // "234 Vendidos" - data.sold_quantity
  // "Comprar" - data.permalink

  // "Descrições" - items/MLA1109059186/description data.plain_text
  // "Imagem" -  data.pictures[].url


  return <Container>
    <Data>
      {data?.title}
      {description?.plain_text}
      {/* {part2?.plain_text} */}
    </Data>
  </Container>


}

export default Details