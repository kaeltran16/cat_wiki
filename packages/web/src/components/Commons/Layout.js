import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Footer } from '../Commons';
import ErrorBoundary from './ErrorBoundary';
import media from 'styled-media-query';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;

	${media.lessThan('small')`
			width: 95%;
	`}
	${media.greaterThan('small')`
			width: 90%;
	`}
`;
const Layout = ({ children }) => (
	<Container>
		<Navbar />
		<ErrorBoundary>{children}</ErrorBoundary>
		<Footer />
	</Container>
);

export default Layout;
