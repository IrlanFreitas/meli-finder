import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    min-height: calc(100vh - 50px);
    background: #F5F5F5;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`

export const Data = styled.div`
    width: 65%;
    margin-bottom: 50px;
    background: white;
    padding: 15px;
    border-radius: 5px;
`

export const Details = styled.div`
    display: flex;
    /* width: 50%; */
    justify-content: space-between;
    margin-bottom: 50px;
`

export const Image = styled.img`
    width: 50%;
`

export const Info = styled.div`
    width: 27%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 15px;
`

export const Conditions = styled.p`
    width: 27%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 15px;
`

export const ConditionAndSold = styled.p`
    padding: 20px 0;
    color: gray;
`

export const Title = styled.h1`
    padding-bottom: 40px;
    font-weight: 700;
    font-size: 25px;
`

export const Price = styled.p`
    font-size: 40px;
    padding-bottom: 40px;
`

export const Buy = styled.a`
    width: 100%;
    height: 50px;
    color: white;
    border-radius: 5px;
    background-color: #3483fa;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const Description = styled.div`
    width: calc(100% - 27%);
    padding-bottom: 20px;
    padding-left: 20px;
`

export const DescriptionTitle = styled.h2`
    font-size: 35px;
    margin-bottom: 50px;
`

export const DescriptionText = styled.p`
    color: gray;
`