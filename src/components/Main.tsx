import { Flex } from "@chakra-ui/react";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./WorkPages/Work";

export default function Main() {
  return (
    <div role="main" style={{ scrollSnapType: "y mandatory" }}>
      <Flex
        scrollSnapType={"y"}
        flexDir={"column"}
        bgAttachment="fixed"
        bgSize="cover"
        // backgroundImage={"/images/background1.jpg"}
        backgroundColor={"grey"}
        //backgroundBlendMode={{ lg: "none", base: "lighten" }}
      >
        <Home />
        <Work />
        {/* <ArtGallery/>
        <Resume />
        <About />
        <Contact /> */}
        <Contact/>
      </Flex>
    </div>
  );
}
