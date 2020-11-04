import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import CatLogo from './Commons/CatLogo';

const Container = styled.div`
	padding: 2rem;
`;

const Logo = styled(CatLogo)`
	cursor: pointer;
`;
const Navbar = () => {
	const history = useHistory();
	const handleLogoClick = () => {
		history.push('/');
	};
	return (
		<Container>
			<Logo width='17.5rem' onClick={handleLogoClick} />;
		</Container>
	);
};

export default Navbar;
