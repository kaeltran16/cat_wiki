import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;
const App = () => (
  <Container>
    <Navbar />
    <Hero />
  </Container>
);

export default App;
