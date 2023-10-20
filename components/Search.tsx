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
  @media only screen and (min-width:576px){
    width:300px;
  }
  background: ${(props) => props.theme.inputBg};
`;

export default Search;
