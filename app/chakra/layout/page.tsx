"use client";

import React from "react";

import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function Page() {
  return (
    <Grid
      h="100vh"
      templateAreas={`
      "header header header"
      "filter filter filter"
      "main main sidebar"
      "footer footer sidebar"
      `}
      gridTemplateColumns="1fr 1fr auto"
      gridTemplateRows="auto auto 1fr auto"
    >
      <GridItem bg="gray.200" area="header">
        <Box h="64px">HEADER</Box>
      </GridItem>
      <GridItem bg="green.500" area="filter">
        {/*<Box>FILTER</Box>*/}
      </GridItem>
      <GridItem bg="green.500" area="sidebar">
        {/*<Box w="400px">oi</Box>*/}
      </GridItem>
      <GridItem bg="orange.500" area="main" overflow="auto">
        <Flex direction="column" bg="pink.400" h="full">
          <Box bg="gray.100" h="231px" py="5">
            <Flex align="center" justify="space-evenly" h="full" px="4">
              <Box bg="white" w="592px" h="197px" borderRadius="lg">
                <Center h="full" w="26%" bg="red.100" roundedLeft="lg"></Center>
              </Box>
              <Box bg="white" w="592px" h="197px" borderRadius="lg">
                <Center
                  h="full"
                  w="25%"
                  bg="yellow.200"
                  roundedLeft="lg"
                ></Center>
              </Box>
              <Box bg="white" w="592px" h="197px" borderRadius="lg">
                <Center
                  h="full"
                  w="25%"
                  bg="green.100"
                  roundedLeft="lg"
                ></Center>
              </Box>
            </Flex>
          </Box>
          <Box>THeader</Box>
          <Box flex="1" bg="blue.600" overflow="auto">
            <Box bg="red.600" h="1000px"></Box>
          </Box>
        </Flex>
      </GridItem>
      <GridItem bg="gray.500" area="footer"></GridItem>
    </Grid>
  );
}
