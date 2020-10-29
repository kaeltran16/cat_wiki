import React from 'react';
import styled from 'styled-components';
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
