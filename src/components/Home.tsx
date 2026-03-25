import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, Flex, Stack, Text, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import BackgroundVid from "../styles/BackgroundVid";
import BlobBg from "../styles/BlobBg";



export default function Home() {
  const texts = ["game developer.", "software engineer.", "artist.", "world builder."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1000); // 1s

    return () => {
      // cleanup on dismount
      clearInterval(intervalId);
    };
  }, []); 


  
  return (
    <div id="top">
        <BackgroundVid />
        <BlobBg color="linear-gradient(222deg,rgba(63, 136, 197, 1) 0%, rgba(211, 180, 219, 1) 51%, rgba(255, 196, 197, 1) 100%)" 
              w={650} 
              h={750}
              shift33={[60,30,40,90]} 
              shift66={[20,50,10,20]} 
              translate33={[20,10]} 
              translate66={[-20,-10]} 
              mt="50vh"
              ml="60vw"/>
        <BlobBg color="linear-gradient(223deg,rgba(63, 119, 197, 1) 0%, rgba(255, 206, 174, 1) 61%)" 
              w={800} 
              h={850}
              shift33={[50,40,40,90]} 
              shift66={[30,60,10,20]} 
              translate33={[25,10]} 
              translate66={[-20,-10]} 
              mt="120%"
              ml="-10%"/>
        <Flex w="100vw" h="100vh" flexDir={"column"} justifyContent="flex-end" alignItems="center">
          <Flex
            justifyContent={"space-between"}
            w="50rem"
            flexDir={"column"}
            mb="20rem"
          >
            {/* <Flex w="100%" color="white">｢</Flex> */}
            <Text
              variant="bigType"
              color="white"
              textAlign="center"
            >
              {texts[currentIndex]}
            </Text>
            {/* <Flex w="100%" justifyContent={"flex-end"} color="white">｣</Flex> */}
          
          </Flex>
          
          <Flex w="100vw" h="20vh" justifyContent={"flex-end"} alignItems={"flex-end"} > 
        
            <Text
              variant={"h1"}
              color="light"
              mr={{ lg: "6rem", base: "2rem" }}
              zIndex={"2"}
              lineHeight={"1"}
              my=".2rem"
            >
              jess wan
            </Text>
          </Flex>  
      </Flex>
    </div>
  );
}



          

