import React from 'react';
import styled from 'styled-components';
import LazyImage from '../Commons/LazyImage';

const Container = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: 1fr;
	grid-row-gap: 4rem;
`;

const Header = styled.h1`
	font-weight: 700;
	font-size: 4rem;
`;

const CatItem = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: 2fr 8fr;
	align-items: center;
`;

const Name = styled.h1`
	font-weight: 600;
	font-size: 2.5rem;
`;

const Description = styled.p`
	font-weight: 500;
	font-size: 1.25rem;
	line-height: 1.5rem;
`;

const CatImg = styled(LazyImage)`
	grid-row: 1/-1;
	grid-column: 1/1;
`;

const Top10Search = ({ resource }) => {
	const topSearches = resource.read();

	const displayTopSearches = topSearches => {
		return topSearches.map((cat, idx) => (
			<CatItem key={`${cat.id}`}>
				<CatImg src={cat.photoUrl} alt={cat.name} width='80%' height='15rem' />
				<Name>{`${idx + 1}. ${cat.name}`}</Name>
				<Description>{cat.desc}</Description>
			</CatItem>
		));
	};

	return (
		<Container>
			<Header>Top 10 most searched breeds</Header>
			{displayTopSearches(topSearches)}
		</Container>
	);
};

export default Top10Search;