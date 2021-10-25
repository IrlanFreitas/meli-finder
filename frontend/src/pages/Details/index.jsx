import React from 'react';
import { useSelector } from 'react-redux';
import {
  useParams
} from "react-router-dom";
import * as S from "./styled";
import useData from '../../hooks/useData';
import BreadCrumb from "../../components/BreadCrumb";

const Details = () => {
  
  const { id } = useParams();

  const product = useSelector((state) => state.products);


  useData(id, "items");

  return <>
    <S.Container>

      <BreadCrumb />

      <S.Data>
        <S.Details>
          <S.Image src={product?.pictures[0]?.url} alt={`Descrição do produto ${product?.title}`} />
          <S.Info>
            <S.ConditionAndSold>{product?.condition} - {product?.sold_quantity} vendidos</S.ConditionAndSold>
            <S.Title>{product?.title}</S.Title>
            <S.Price>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(product?.price / 100)}</S.Price>
            <S.Buy href={product?.permalink} target="_blank" rel="noopener noreferrer">Comprar</S.Buy>
          </S.Info>
        </S.Details>
        <S.Description>
          <S.DescriptionTitle>Descrição do produto</S.DescriptionTitle>
          <S.DescriptionText>{product?.plain_text}</S.DescriptionText>
        </S.Description>
      </S.Data>
    </S.Container>
  </>

}

export default Details