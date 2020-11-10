import React, { useEffect } from 'react';
import media from 'styled-media-query';
import styled from 'styled-components';
import Rating from 'react-rating';
import { CatRate } from '../Commons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	${media.lessThan('small')`
			flex-direction: column;
	`}
`;

const ImageContainer = styled.div`
	width: 35%;
	height: 30rem;
	${media.lessThan('small')`
			width: 100%;
			height: 30rem;
	`}
`;

const DetailContainer = styled.div`
	flex: 0 1 60%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& > :nth-child(-n + 5) {
		margin: 1rem 0 1rem 0;
	}
`;

const Header = styled.h4`
	font-weight: 600;
	font-size: 2.5rem;
	margin: 5rem 2rem 2rem;
`;

const Intro = styled.p`
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 2.5rem;
`;

const Text = styled.p`
	font-weight: 500;
	font-size: 1.5rem;
	flex: 0 1 50%;
`;

const Label = styled.p`
	font-weight: 700;
	font-size: 1.5rem;
	flex: 0 1 30%;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	${media.lessThan('small')`
			flex-direction: column;
	`}
`;

const Detail = ({ resource, storeSearchedCat }) => {
	const data = resource.read();
	useEffect(() => {
		if (data) {
			storeSearchedCat(data);
		}
	}, [storeSearchedCat]);
	const textRow = text => {
		const splitText = text.split(':');
		return (
			<Row>
				<Label>{`${splitText[0]}`}</Label>
				<Text>{splitText[1]}</Text>
			</Row>
		);
	};

	const ratingRow = (label, rate) => {
		return (
			<Row>
				<Label>{`${label}`}</Label>
				<Rating
					readonly
					initialRating={rate}
					emptySymbol={<CatRate width={44} height={50} fill='grey' />}
					fullSymbol={<CatRate width={44} height={50} />}
				/>
			</Row>
		);
	};
	const displayData = data => {
		const {
			life_span,
			temperament,
			origin,
			adaptability,
			affection_level,
			child_friendly,
			grooming,
			health_issues,
			intelligence,
			social_needs,
			stranger_friendly
		} = data;
		return (
			<>
				{textRow(`Temperament: ${temperament}`)}
				{textRow(`Origin: ${origin}`)}
				{textRow(`Life Span: ${life_span}`)}
				{ratingRow('Adaptability', adaptability)}
				{ratingRow('Affection level', affection_level)}
				{ratingRow('Child friendly', child_friendly)}
				{ratingRow('Grooming', grooming)}
				{ratingRow('Intelligence', intelligence)}
				{ratingRow('Health issues', health_issues)}
				{ratingRow('Social needs', social_needs)}
				{ratingRow('Stranger friendly', stranger_friendly)}
			</>
		);
	};
	return (
		<Container>
			<ImageContainer>
				<LazyLoadImage
					width='100%'
					height='100%'
					effect='blur'
					src={data.photoUrl}
					alt={data.name}
				/>
			</ImageContainer>
			<DetailContainer>
				<Header>{data.name}</Header>
				<Intro>{data.desc}</Intro>
				{displayData(data)}
			</DetailContainer>
		</Container>
	);
};

export default Detail;
