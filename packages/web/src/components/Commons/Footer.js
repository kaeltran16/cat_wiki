import React from 'react';
import styled from 'styled-components';
import CatLogo from './CatLogo';

const Container = styled.div`
	height: 10vh;
	display: flex;
	margin-top: 10rem;
	background-color: #000000;
	border-top-left-radius: 2rem;
	border-top-right-radius: 2rem;
	justify-content: space-between;
	align-items: center;

	& > * {
		padding: 0 4rem 0 4rem;
	}
`;

const Text = styled.p`
	color: white;
	font-size: 1.5rem;
	font-weight: 400;
`;
const Footer = () => {
	return (
		<Container>
			<CatLogo width='15rem' fill='white' />
			<Text>© Kael - devchallenge.io 2020</Text>
		</Container>
	);
};

export default Footer;
