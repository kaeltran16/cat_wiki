import React, { Suspense } from 'react';
import styled from 'styled-components';
import backgroundImg from '../../assets/HeroImagemd.png';
import CatLogo from '../Commons/CatLogo';
import Search from './search';
import MostSearch from './mostSearch';
import Layout from '../layout';
import Article from '../Article';
import { createResource, topSearchedCat } from '../../services';
import Spinner from '../Commons/Spinner';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #e3e1dc;
	align-items: center;
	border-radius: 3rem;
`;

const BackgroundContainer = styled.div`
	background-image: url(${backgroundImg});
	background-size: cover;
	width: 100%;
	height: 50rem;
	background-position: center top;
	background-repeat: no-repeat;
	display: flex;
	border-radius: 3rem;
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

const Hero = () => {
	const topSearchedResource = createResource(topSearchedCat(10));
	return (
		<Layout>
			<Wrapper>
				<BackgroundContainer>
					<Container>
						<CatLogo fill='white' width='30rem' />
						<Text>Get to know more about your cat breed</Text>
						<Space />
						<Search />
					</Container>
				</BackgroundContainer>
				<Suspense fallback={<Spinner />}>
					<MostSearch resource={topSearchedResource} />
				</Suspense>
			</Wrapper>
			<Article />
		</Layout>
	);
};
export default Hero;
