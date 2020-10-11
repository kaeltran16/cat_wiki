import React, { useState } from "react";
import styled from "styled-components";
import AsyncSelect from "react-select/async";

const Input = styled.input`
  width: 30rem;
  height: 5rem;
  border-radius: 5rem;

  ::placeholder {
    padding-left: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

const selectStyles = {
  control: (provided, _) => ({
    ...provided,
    borderRadius: "5rem",
    height: "5rem",
  }),

  placeholder: (provided, _) => ({
    ...provided,
    paddingLeft: "2rem",
    fontSize: "1.5rem",
    fontWeight: "500",
  }),
};

const Container = styled.div`
  width: 70%;
`;
const Search = () => {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/cat/search?name=${inputValue}`
      );

      const data = await response.json();
      return data.message ? [] : data;
    } catch (e) {}
  };
  return (
    <Container>
      <AsyncSelect
        placeholder="Enter your breed.."
        styles={selectStyles}
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        getOptionLabel={(e) => e.name}
        getOptionValue={(e) => e.name}
        onChange={handleChange}
        onInputChange={handleInputChange}
      />
    </Container>
  );
};

export default Search;
