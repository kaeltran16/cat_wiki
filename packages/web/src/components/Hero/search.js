import React, { useState } from 'react';
import styled from 'styled-components';
import AsyncSelect from 'react-select/async';
import { useHistory } from 'react-router-dom';
import { components } from 'react-select';

const selectStyles = {
	control: (provided, _) => ({
		...provided,
		borderRadius: '5rem',
		height: '5rem'
	}),

	placeholder: (provided, _) => ({
		...provided,
		paddingLeft: '2rem',
		fontSize: '1.5rem',
		fontWeight: '500'
	}),
	input: (provided, _) => ({
		...provided,
		paddingLeft: '2rem',
		fontSize: '1.5rem',
		fontWeight: '500'
	}),
	singleValue: (provided, _) => ({
		...provided,
		paddingLeft: '2rem',
		fontSize: '1.5rem',
		fontWeight: '500'
	}),
	option: (provided, _) => ({
		...provided,
		fontSize: '1.5rem',
		fontWeight: '500'
	})
};

const Container = styled.div`
	width: 70%;
`;
const Search = () => {
	const [inputValue, setValue] = useState('');
	const [selectedValue, setSelectedValue] = useState(null);

	const history = useHistory();
	const handleInputChange = value => {
		setValue(value);
	};

	const handleChange = value => {
		setSelectedValue(value);
		history.push({
			pathname: `/detail/${value.name.toLowerCase()}`
		});
	};

	const handleFocus = () => {
		setSelectedValue(null);
		setValue('');
	};

	const loadOptions = async inputValue => {
		if (inputValue) {
			try {
				const response = await fetch(
					`http://localhost:5001/cat-wiki/us-central1/api/search?name=${inputValue}`
				);

				const data = await response.json();
				return data.message ? [] : data;
			} catch (e) {}
		}
	};

	return (
		<Container>
			<AsyncSelect
				placeholder='Enter your breed..'
				styles={selectStyles}
				cacheOptions
				loadOptions={loadOptions}
				defaultOptions
				components={{ DropdownIndicator }}
				value={selectedValue}
				blurInputOnSelect
				onFocus={handleFocus}
				getOptionLabel={e => e.name}
				getOptionValue={e => e.name}
				onChange={handleChange}
				onInputChange={handleInputChange}
			/>
		</Container>
	);
};

const CaretDownIcon = () => {
	return (
		<svg width='26' height='28' viewBox='0 0 32 32'>
			<path d='M19.427 20.427c-1.39 0.99-3.090 1.573-4.927 1.573-4.694 0-8.5-3.806-8.5-8.5s3.806-8.5 8.5-8.5c4.694 0 8.5 3.806 8.5 8.5 0 2.347-0.951 4.472-2.49 6.010l5.997 5.997c0.275 0.275 0.268 0.716-0.008 0.992-0.278 0.278-0.72 0.28-0.992 0.008l-6.081-6.081zM14.5 21c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5v0z' />
		</svg>
	);
};

const DropdownIndicator = props => {
	return (
		<components.DropdownIndicator {...props}>
			<CaretDownIcon />
		</components.DropdownIndicator>
	);
};

export default Search;
