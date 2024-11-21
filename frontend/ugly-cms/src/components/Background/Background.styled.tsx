import styled from "styled-components";
import { Image, Flex, Fieldset } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Items = styled(Flex)`
    flex-wrap: wrap;
    gap: 8px;  
    flex-direction: row;
`;

export const Item = styled(Link)`
    max-width: 300px;
    align-items: center;
    cursor: pointer;
    &:hover {
        font-weight: bold;
`;

export const BackgroundImage = styled(Image)`
    background-color: #f0f0f0;
    border: 1px solid #fff;
    display: block;
    position: relative;
    width: 100%;
    max-height: 400px;
    margin-bottom: 8px;
    
    &::before {
        content: "Loading..." attr(alt);
        display: flex;
        background-color: #999;
        color: #fff;
        width: 300px;
        height: 400px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`;

export const New = styled(Link)`
    width: 20%;
    display: block;
    background-color: #09f;
    color: #fff;
    padding: 8px;
    text-align: center;
`;

export const NewWrapper = styled(Fieldset.Root)`
    display: flex;
    flex: 1;
    width: 300px;
    align-items: flex-start;
    align-self: stretch;
    gap: 12;
    flex-direction: column;
`;