import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  Grid,
  GridItem,
  Switch,
  Card,
} from "@chakra-ui/react";

import WorkItem from "./WorkItem";

export default function Work() {
 

  return (
    <div id="work" style={{ scrollSnapType: "y" }}>
      <Flex
        scrollSnapType="y"
        height="100vh"
        px="25%"
        mt="10rem"
        flexDir={"column"}
        gap="5rem"
      >
          <WorkItem title={"Origin Two"} desc={"2d game engine"} link={"/page"} image={null} i={0}/>
          <WorkItem title={"Origin Two"} desc={"2d game engine"} link={null} image={null} i={1}/>
      </Flex>
    </div>
  );
}
