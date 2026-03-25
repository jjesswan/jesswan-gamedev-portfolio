import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonGroup, Flex, Stack, Text, Icon, Box } from "@chakra-ui/react";



export default function BackgroundVid() {
  return (
    <Box position="absolute" top={0} left={0} width="100%" height="100%" overflow="hidden" zIndex={"1"}>
      <video
        loop
        autoPlay
        muted
        style={{
          position: "absolute",
        }}
      >
        <source src="/images/header.webm" type="video/webm" />
      </video>
    </Box>
  );
}

