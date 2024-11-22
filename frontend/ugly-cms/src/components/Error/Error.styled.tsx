import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const ErrorWrapper = styled(Box)`
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: tomato;
    color: #333;
    padding-top: 50px;
`;

export const ErrorText = styled(Text)`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 30px;
`;