import styled from "styled-components";

export const Container = styled.div`
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