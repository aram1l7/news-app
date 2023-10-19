import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

function Search({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) {
  return <Input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />;
}

const Input = styled.input`
  border: none;
  outline: none;
  padding: 8px 12px;
  border-radius: 4px;
  width:300px;
`;

export default Search;