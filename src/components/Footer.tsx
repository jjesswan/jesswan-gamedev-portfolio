import {
  Box,
  Grid,
  GridItem,
  Text,
  Button,
  Icon,
  Divider,
  Flex,
} from "@chakra-ui/react";
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from "react-icons/ti";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <Flex
      bottom={0}
      m="0"
      p="0"
      w="100%"
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      bg="grey"
      pb="2rem"
      >
      <Text variant="type" color="blue" fontSize={".5rem"} textAlign={"center"} zIndex={2}>
        designed + created with ♥<br></br>
        jessica wan 2026
      </Text>
    </Flex>
  );
}
