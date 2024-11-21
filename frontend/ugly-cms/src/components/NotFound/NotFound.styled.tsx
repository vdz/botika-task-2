import styled from "styled-components";
import lost from "../../assets/lost.gif";

export const NotFoundWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: flex-start;
    align-items: center;
    padding-top: 200px;
    background-color: #999;
    color: #f5f5f5;
    background-image: url(${lost});
    background-size: 400px;
    background-position: top center;
    background-repeat: no-repeat;
`;