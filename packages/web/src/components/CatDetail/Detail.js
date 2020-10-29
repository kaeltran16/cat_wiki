import React, { useEffect } from 'react';
import LazyImage from '../Commons/LazyImage';
import styled from 'styled-components';
import Rating from 'react-rating';
import CatRate from '../Commons/CatRate';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
`;

const DetailContainer = styled.div`
	flex: 0 1 60%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-wrap: wrap;

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
	line-height: 1.5rem;
`;

const Text = styled.p`
	font-weight: 500;
	font-size: 1.25rem;
	flex: 0 1 50%;
`;

const Label = styled.p`
	font-weight: 700;
	font-size: 1.25rem;
	flex: 0 1 20%;
`;

const Row = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const Detail = ({ resource, storeSearchedCat }) => {
	const data = resource.read();
	useEffect(() => {
		if (data) {
			storeSearchedCat(data);
		}
	}, [data]);
	const textRow = text => {
		const splitText = text.split(':');
		return (
			<Row>
				<Label>{`${splitText[0]}: `}</Label>
				<Text>{splitText[1]}</Text>
			</Row>
		);
	};

	const ratingRow = (label, rate) => {
		return (
			<Row>
				<Label>{`${label} :`}</Label>
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
			<LazyImage
				src={data.photoUrl}
				alt={data.name}
				width='25%'
				height='30rem'
			/>
			<DetailContainer>
				<Header>{data.name}</Header>
				<Intro>{data.desc}</Intro>
				{displayData(data)}
			</DetailContainer>
		</Container>
	);
};

export default Detail;
