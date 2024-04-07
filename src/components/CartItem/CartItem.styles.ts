import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex; // means it will display in a row
    justify-content: space-between;
    font-family: Arial, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;
    width: 90%;
    max-width: 1200px;
    margin:0 auto;

    div{
        flex: 1; 
    }
    .information, .buttons{
        display: flex;
        justify-content: space-between;
    }

    img{
        display: flex;
        max-width: 80px;
        object-fit: cover;
        margin-left: 40px;
        overflow: hidden;
    }
`;