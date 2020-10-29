import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../../hooks';
import LazyImage from '../Commons/LazyImage';

const PhotoContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-auto-flow: row;
	grid-gap: 3rem;
	margin-top: 2rem;
	height: fit-content;
`;
const Header = styled.h4`
	font-weight: 600;
	font-size: 2.5rem;
	margin: 5rem 2rem 2rem;
`;
const MoreImage = ({ id }) => {
	const [images, imageLoading] = useFetch(
		`http://localhost:5001/cat-wiki/us-central1/api/images?limit=8&id=${id}`
	);
	const displayImage = data => {
		return data.map((item, idx) => (
			<LazyImage
				width='100%'
				height='20rem'
				src={item.photoUrl}
				key={`${item.id}-${idx}`}
				alt={item.name}
			/>
		));
	};
	return (
		<>
			<Header>Other photos</Header>
			<PhotoContainer>
				{imageLoading ? <p>Loading...</p> : displayImage(images)}
			</PhotoContainer>
		</>
	);
};

export default MoreImage;
