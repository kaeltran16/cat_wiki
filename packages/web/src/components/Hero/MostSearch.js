import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
	${media.lessThan('small')`
			line-height: 2rem;
	`}
`;

const Header = styled.h1`
	font-size: 3rem;
	font-weight: 700;
	line-height: 5rem;
	${media.lessThan('small')`
			line-height: 4rem;
	`}
`;

const Container = styled.div`
	height: 50rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	width: 80%;
`;

const CatItem = styled.figure`
	cursor: pointer;
	transition: 0.5s;

	img {
		border-radius: 1.25rem;
	}
`;
const ImageContainer = styled.div`
	display: grid;
	grid-gap: 2rem;
	height: 20rem;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
	margin-bottom: 4rem;

	&:hover ${CatItem}:not(:hover) {
		filter: grayscale(100%);
	}
	${media.lessThan('small')`
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		height: 32rem;	
		margin-top: 2rem;
	`}
`;

const MostSearch = ({ resource }) => {
	const topSearches = resource.read();

	const history = useHistory();

	const handleCatClick = item => {
		history.push({
			pathname: `/detail/${item.name.toLowerCase()}`
		});
	};

	const catItems = () => {
		return topSearches.map(cat => (
			<CatItem>
				<LazyLoadImage
					onClick={() => handleCatClick(cat)}
					src={cat.photoUrl}
					alt={cat.name}
					effect='blur'
					width='100%'
					height='100%'
				/>
			</CatItem>
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
			<ImageContainer>{catItems()}</ImageContainer>
		</Container>
	);
};

export default MostSearch;
