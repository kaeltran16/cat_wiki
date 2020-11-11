import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
	LazyLoadImage,
	trackWindowScroll
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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

const ImageContainer = styled.div`
	width: 100%;
	height: 20rem;

	img {
		border-radius: 1.5rem;
	}
`;
const MoreImage = ({ resource }) => {
	const images = resource.read();
	const displayImage = data => {
		return data.map((item, idx) => (
			<ImageContainer key={`${item.id}-${idx}`}>
				<LazyLoadImage
					width='100%'
					height='100%'
					effect='blur'
					src={item.photoUrl}
					alt={item.name}
				/>
			</ImageContainer>
		));
	};
	return (
		<>
			<Header>Other photos</Header>
			<PhotoContainer>{displayImage(images)}</PhotoContainer>
		</>
	);
};

export default trackWindowScroll(MoreImage);
