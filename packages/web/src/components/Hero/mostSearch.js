import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks';
import LazyImage from '../Commons/LazyImage';

const Label = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
	display: flex;
	flex-direction: column;

	&:after {
		content: '';
		width: 4.5rem;
		position: absolute;
		margin-top: 2.5rem;
		border: 1px solid black;
	}
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
	cursor: pointer;
`;

const Header = styled.h1`
	font-size: 3rem;
	font-weight: 700;
	line-height: 5rem;
`;

const ImageContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	grid-gap: 2rem;
	height: 20rem;
`;

const Container = styled.div`
	height: 50rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 80%;
`;

const MostSearch = () => {
	const [topSearches, loading] = useFetch(
		'http://localhost:5001/cat-wiki/us-central1/api/topSearch?limit=4'
	);

	const history = useHistory();

	const handleCatClick = item => {
		history.push({
			pathname: `/detail/${item.name.toLowerCase()}`
		});
	};

	const catItems = () => {
		return topSearches.map(cat => (
			<LazyImage
				onClick={() => handleCatClick(cat)}
				key={cat.id}
				src={cat.photoUrl}
				alt={cat.name}
				width='100%'
				height='100%'
			/>
		));
	};

	const handleViewMore = () => {
		history.push('/topSearches');
	};
	return (
		<Container>
			<Label>Most Searched Breeds</Label>
			<HeaderContainer>
				<Header>
					66+ Breeds For you
					<br /> to discover
				</Header>
				<SeeMore onClick={handleViewMore}>See more →</SeeMore>
			</HeaderContainer>
			<ImageContainer>{!loading && catItems()}</ImageContainer>
		</Container>
	);
};

export default MostSearch;
