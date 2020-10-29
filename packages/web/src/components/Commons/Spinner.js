import React from 'react';
import styled from 'styled-components';
import { FlapperSpinner } from 'react-spinners-kit';

const Container = styled.div`
	height: 60vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Spinner = () => (
	<Container>
		<FlapperSpinner color='red' size={30} />
	</Container>
);

export default Spinner;
