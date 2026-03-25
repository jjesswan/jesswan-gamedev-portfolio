import { Box, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { Link, Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { GoHome, GoProjectRoadmap, GoStack, GoMail } from "react-icons/go";



export default function Navbar() {
  const size = 4;
  return (
    <Box
      position={"fixed"}
      zIndex={"sticky"}
      right={{ base: "auto", lg: "2rem" }}
      mx={{ base: "10vw", lg: 0 }}
      p="0"
      display={"flex"}
      flexDir={"column"}
      top={"10%"}
    >
      <Flex
      flexDir={"column"}
      justifyContent={"space-between"}
      >

          <HashLink smooth to="/#top">
            
              <Icon
                as={GoHome as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
     
          <HashLink smooth to="/#work">
              <Icon
                as={GoStack as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
          <HashLink smooth to="/#resume">
              <Icon
                as={GoProjectRoadmap as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
          <HashLink smooth to="/#contact">
              <Icon
                as={GoMail as any}
                boxSize={size}
                fill={"white"}
                mb=".5rem"
              ></Icon>
          </HashLink>
         
       
      </Flex>
    </Box>
  );
}
