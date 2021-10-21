import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    min-height: calc(100vh - 50px);
    background: #F5F5F5;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`

export const List = styled.div`
    width: 65%;
    margin-bottom: 50px;
    background: white;
    padding: 15px;
    border-radius: 5px;
`

export const BreadCrumb = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    height: 65px;
    color: gray;

    .item {
        display: inline-block;
    }

    & .item:not(:last-child)::after {
        content: "  >";
        margin-right: 5px;
    }

    & .item:last-child {
        font-weight: bold;
    }
`

