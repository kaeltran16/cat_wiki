import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

	${media.lessThan('small')`
			grid-template-rows: 2fr 4fr 4fr;
			grid-template-columns: 1fr;
			grid-row-gap: 2rem;
	`}
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

const ImageContainer = styled.div`
	width: 80%;
	height: 15rem;
	grid-row: 1/-1;
	grid-column: 1/1;

	${media.lessThan('small')`
			width: 100%;
			height: 20rem;
			grid-row: 2/-1;
	`}
`;

const Top10Search = ({ resource }) => {
	const topSearches = resource.read();

	const displayTopSearches = topSearches => {
		return topSearches.map((cat, idx) => (
			<CatItem key={`${cat.id}`}>
				<ImageContainer>
					<LazyLoadImage
						width='100%'
						height='100%'
						effect='blur'
						src={cat.photoUrl}
						alt={cat.name}
					/>
				</ImageContainer>
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
