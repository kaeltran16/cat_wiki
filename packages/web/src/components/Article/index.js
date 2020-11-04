import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import img1 from '../../assets/image 1.png';
import img2 from '../../assets/image 2.png';
import img3 from '../../assets/image 3.png';

const Container = styled.div`
	display: flex;
	margin: 10rem 5rem;
	height: 45rem;

	${media.lessThan('small')`
			flex-direction: column;
			margin: 2rem;
			height: 60rem;
	`}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 45%;
	height: 70%;
	justify-content: space-around;
	align-self: center;
`;

const ImageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 2fr;
	grid-gap: 2rem;
	justify-items: flex-end;
	flex: 0 1 45%;
	max-width: 45%;

	${media.lessThan('small')`
			max-width: 100%;
			margin-top: 2.5rem;	
	`}
`;

const Image = styled.img`
	height: 100%;
	width: auto;
`;

const Img1 = styled(Image)`
	grid-column: 1;
	grid-row: 2/ -1;
`;
const Img2 = styled(Image)`
	grid-column: 1;
	grid-row: 1/2;
`;
const Img3 = styled(Image)`
	grid-column: 2;
	grid-row: 1/3;
`;

const Header = styled.h1`
	font-size: 4rem;
	font-weight: 700;
	line-height: 4.5rem;
`;

const Intro = styled.p`
	font-size: 1.75rem;
	font-weight: 500;
`;

const SeeMore = styled.a`
	font-size: 1.75rem;
	font-weight: 500;
	color: gray;
`;

const Article = () => {
	return (
		<Container>
			<TextContainer>
				<Header>Why should you have a cat?</Header>
				<Intro>
					Having a cat around you can actually trigger the release of calming
					chemicals in your body which lower your stress and anxiety levels
				</Intro>
				<SeeMore>READ MORE →</SeeMore>
			</TextContainer>
			<ImageContainer>
				<Img1 src={img1} />
				<Img2 src={img2} />
				<Img3 src={img3} />
			</ImageContainer>
		</Container>
	);
};

export default Article;
