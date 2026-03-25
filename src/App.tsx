import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navigation";
import Work from "./components/WorkPages/Work";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customTheme from "./styles/theme";

import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Main from "./components/Main";
import WorkPage from "./components/WorkPages/WorkPage_Template";
import WorkPage_Template from "./components/WorkPages/WorkPage_Template";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <BrowserRouter>
      <Navbar />

      {/* <ContactBar /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<WorkPage />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/page" element={<WorkPage_Template />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ChakraProvider>
);
