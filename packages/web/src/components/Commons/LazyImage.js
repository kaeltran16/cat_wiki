import React from 'react';
import styled, { keyframes } from 'styled-components';
import LazyLoad from 'react-lazyload';

const ImageWrapper = styled.div`
	position: relative;
	width: ${props => props.width};
	height: ${props => props.height};
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
`;

const LazyImage = ({ src, alt, ...props }) => {
	const refPlaceholder = React.useRef();

	const removePlaceholder = () => {
		refPlaceholder.current.remove();
	};

	return (
		<ImageWrapper {...props}>
			<Placeholder ref={refPlaceholder} />
			<LazyLoad>
				<StyledImage
					onLoad={removePlaceholder}
					onError={removePlaceholder}
					src={src}
					alt={alt}
				/>
			</LazyLoad>
		</ImageWrapper>
	);
};

export default LazyImage;
