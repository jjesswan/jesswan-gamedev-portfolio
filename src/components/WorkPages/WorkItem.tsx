import React from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  Card,
  Image,
  CardBody,
  Heading,
  Stack,
  CardFooter,
  Link,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";



interface WorkProps {
  title: string;
  desc: string;
  link: string | null;
  image: string | null;
  i: number;
}

export default function WorkItem(props: WorkProps) {
    return (
    <LinkBox w="100%" 
        h="15rem" 
        zIndex={3} 
        transition="all 0.2s ease-in-out"
        _hover={{ transform: 'scale(1.02)', shadow: '2xl' }}
        borderRadius={".5rem"}
      >
      <LinkOverlay href={props.link ? props.link : "#"}>
    
       <Grid
        scrollSnapType="y"
        templateAreas={props.i % 2 == 0 ? {
          lg: `"main desc"`,
          base: `"main desc"`,
        } : {
            lg: `"desc main"`,
          base: `"desc main"`,
        }}
        gridTemplateRows="1fr"
        gridTemplateColumns={{lg: "1fr 1fr", base: "1fr 1fr" }}
        w="100%"
        h="100%"
        bg="transparent"
        _hover={{ bg: "red.500" }} 
        transition="background 0.2s ease-in-out"
        gap="2rem"
        
      >
    <GridItem area={"main"}>
        <Image
            objectFit="cover"
            src={props.image ? props.image : "/images/Cobblestone/header.jpg"}
            borderRadius={".5rem"}
            key={Date.now()}
            h="100%"
            w="100%"
        />
    </GridItem>
    <GridItem area={"desc"} display="flex" justifyContent={"center"} flexDir="column">
       
            <Text variant="h4" lineHeight={"80%"} textAlign={props.i % 2 == 0 ? "left" : "right"}>
            {props.title}
            </Text>
            <Text variant="type" color="blue" textAlign={props.i % 2 == 0 ? "left" : "right"}>
            {props.desc}
            </Text>

      </GridItem>
      </Grid>
      </LinkOverlay>
    </LinkBox>
    );
}