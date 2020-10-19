import React from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks";

const Label = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SeeMore = styled.a`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
  align-self: flex-end;
  line-height: 3rem;
`;

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 5rem;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 15rem;
  height: 15rem;
  background-size: cover;
  background-position: center;
  border-radius: 2rem;
`;

const Container = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
`;

const CatItem = styled.div``;

const CatName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  padding-top: 1rem;
`;
const MostSearch = () => {
  const [topSearches, loading] = useFetch(
    "http://localhost:5000/cat-wiki/us-central1/api/topSearch?limit=4"
  );

  const catItems = () => {
    return topSearches.length > 0
      ? topSearches.map((item) => (
          <CatItem>
            <Image src={item.url} alt={item.name} />
            <CatName>{item.name}</CatName>
          </CatItem>
        ))
      : null;
  };
  return (
    <Container>
      <Label>Most Searched Breeds</Label>
      <HeaderContainer>
        <Header>
          66+ Breeds For you
          <br /> to discover
        </Header>
        <SeeMore>See more →</SeeMore>
      </HeaderContainer>
      <ImageContainer>{loading ? <p>Loading..</p> : catItems()}</ImageContainer>
    </Container>
  );
};

export default MostSearch;
