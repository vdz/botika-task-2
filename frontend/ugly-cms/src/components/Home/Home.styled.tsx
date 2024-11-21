import { Container, Flex } from "@chakra-ui/react";
import styled from "styled-components";

export const HomeWrapper = styled(Container)`
   display: flex;
   flex-direction: column;
   gap: 20px;

   .widget {
        width: 50%;
   }
`;

export const Heading = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;
