import React, { Dispatch, SetStateAction, useState } from "react";
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
  AspectRatio,
} from "@chakra-ui/react";


interface ImageProps {
  src: string;
  desc: string;
  setModalSrc: Dispatch<SetStateAction<string>>;
  setModalDesc: Dispatch<SetStateAction<string>>;
  onOpen: any;
}

export default function ImageItem(props: ImageProps) {
  const [isHovering, setIsHovering] = useState(false);

  function setModal(){
    props.setModalSrc(props.src)
    props.setModalDesc(props.desc);
  }
  return (
    
    <Card
      dir="column"
      alignItems={"center"}
      justifyContent="flex-start"
      variant="none"
      width={"100%"}
      gap={".5rem"}
      bg="white"
      borderRadius={"none"}
      onMouseDown={() => setModal()}
      onClick={props.onOpen}
    >
      <Image
        objectFit="cover"
        width="100%"
        src={props.src}
        _hover={{ opacity: "70%" }}
      />
      {/* 
      <CardBody
        alignItems={"flex-start"}
        justifyContent={"center"}
        py="0"
        bg="red"
      >
        <Text variant={"subtitle"}>
          {props.desc}
        </Text>
      </CardBody> */}
    </Card>
  );
}
