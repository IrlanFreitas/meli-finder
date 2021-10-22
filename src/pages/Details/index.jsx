import React from 'react'
import {
  useParams
} from "react-router-dom";
import * as S from "./styled";
import useData from '../../hooks/useData';

const Details = () => {

  const { id } = useParams();

  const data = useData(id, "items")
  const description = useData(id, "items", true)

  return <S.Container>
    <S.Data>
      <S.Details>
        <S.Image src={data?.pictures[0]?.url} alt="" srcset="" />
        <S.Info>
          <S.ConditionAndSold>{data?.condition} - {data?.sold_quantity} vendidos</S.ConditionAndSold>
          <S.Title>{data?.title}</S.Title>
          <S.Price>$ {data?.price}</S.Price>
          <S.Buy href={data?.permalink} target="_blank" rel="noopener noreferrer">Comprar</S.Buy>
        </S.Info>
      </S.Details>
      <S.Description>
        <S.DescriptionTitle>Descrição do produto</S.DescriptionTitle>
        <S.DescriptionText>{description?.plain_text}</S.DescriptionText>
      </S.Description>
    </S.Data>
  </S.Container>


}

export default Details