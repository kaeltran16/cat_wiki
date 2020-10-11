import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/HeroImagemd.png";
import CatLogo from "../Commons/CatLogo";
import Search from "./search";

const Wrapper = styled.div`
  display: flex;
`;

const BackgroundContainer = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  width: 100%;
  height: 50rem;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 0 1 45%;
  height: 50%;
  align-items: center;
`;

const Text = styled.p`
  color: white;
  font-size: 2rem;
  font-weight: 500;
`;

const Space = styled.div`
  margin: 1.5rem;
`;

const Hero = () => (
  <Wrapper>
    <BackgroundContainer>
      <Container>
        <CatLogo fill="white" width="30rem" />
        <Text>Get to know more about your cat breed</Text>
        <Space />
        <Search />
      </Container>
    </BackgroundContainer>
  </Wrapper>
);
export default Hero;
