import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled(Link)`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: flex-start;
    padding: 15px;
    /* margin-bottom: 20px; */
    border-bottom: 1px solid lightgray;
`

export const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 5px;
`

export const Shipping = styled.img`
    width:25px; 
    height:25px;
    margin-left: 10px;
    background-color: lightgreen;
    padding: 4px;
    border-radius: 50%;
`

export const Data = styled.div`
    width: 60%;
    padding-left: 20px;
    padding-top: 20px;
`

export const Address = styled.div`
    padding-top: 40px;
    color: gray;
    font-size: 15px;
`