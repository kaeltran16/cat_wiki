import React from 'react';
import styled from 'styled-components';
import Navbar from './navbar';
import Footer from './Commons/footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;
const Layout = ({ children }) => (
   <Container>
      <Navbar />
      {children}
      <Footer/>
   </Container>
);

export default Layout;
