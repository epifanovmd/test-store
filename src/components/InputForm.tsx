import styled from "styled-components";

export const InputForm = ({ search, handleSearch }) => {
  return (
    <Input
      type="text"
      placeholder="Search shop..."
      value={search}
      onChange={handleSearch}
    />
  );
};

const Input = styled.input`
  height: 25px;
  width: 270px;
  margin-top: 10px;
  outline: none;
  border: 1px solid #ffb229;
  font-size: 18px;
  color: #63599c;
`;
