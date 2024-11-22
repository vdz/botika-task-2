import styled from "styled-components";
import { Image, Flex, Fieldset, Button, Box, Card } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const Items = styled(Flex)`
    flex-wrap: wrap;
    gap: 8px;  
    flex-shrink: 1;
    flex-direction: row;
`;

export const Item = styled(Card.Root)`
    max-width: 300px;
    align-items: flex-start;
    cursor: pointer;
`;

export const BackgroundImage = styled(Image)`
    background-color: #f0f0f0;
    border: 1px solid #fff;
    display: block;
    position: relative;
    margin-bottom: 8px;
    flex-grow: 1;
    object-fit: contain;
    
    &::before {
        content: "Loading..." attr(alt);
        display: flex;
        color: tomato;
        min-height: 100px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`;

export const New = styled(Button)`
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

export const DetailsWrapper = styled.div`
    flex: 1;
    align-items: flex-start;
    align-self: stretch;
    gap: 12;
    flex-direction: column;
`;

export const Avatar = styled(Image)`
    min-width: 200px;
`;

export const AddNew = styled(Box)`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: 12px;
    width: 300px;
    padding: 12px;
`;