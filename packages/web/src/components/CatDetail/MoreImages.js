import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import LazyImage from '../Commons/LazyImage';

const PhotoContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-flow: row;
	grid-gap: 3rem;
	margin-top: 2rem;
	height: fit-content;
	${media.lessThan('small')`
			grid-template-columns: repeat(2, 1fr);
	`}
`;
const Header = styled.h4`
	font-weight: 600;
	font-size: 2.5rem;
	margin: 5rem 2rem 2rem;
`;
const MoreImage = ({ resource }) => {
	const images = resource.read();
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
			<PhotoContainer>{displayImage(images)}</PhotoContainer>
		</>
	);
};

export default MoreImage;
