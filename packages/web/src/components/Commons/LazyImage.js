import React from 'react';
import styled, { keyframes } from 'styled-components';
import LazyLoad from 'react-lazyload';

const ImageWrapper = styled.div`
	position: relative;
	width: ${props => (props.width ? props.width : '100%')};
	height: ${props => (props.height ? props.height : '100%')};
	cursor: pointer;
`;

const loadingAnimation = keyframes`
  0% {
    background-color: #fff;
  }
  50% {
    background-color: #ccc;
  }
  100% {
    background-color: #fff;
  }
`;

const Placeholder = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	animation: ${loadingAnimation} 1s infinite;
	border-radius: 2rem;
`;

const StyledImage = styled.img`
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 2rem;
	max-width: 100%;
	max-height: 100%;
	vertical-align: middle;
`;

const LazyImage = ({ src, alt, ...props }) => {
	return (
		<ImageWrapper {...props}>
			<LazyLoad once placeholder={<Placeholder />}>
				<StyledImage src={src} alt={alt} />
			</LazyLoad>
		</ImageWrapper>
	);
};

export default LazyImage;
