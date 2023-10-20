import { fetchNews } from "@/app/api/getNews";
import { getOneWeekBefore } from "@/utils";
import React, { useState } from "react";
import styled from "styled-components";

function Filters({
  setData,
  setPrevData,
}: {
  setData: (val: any[]) => void;
  setPrevData: (val: any[]) => void;
}) {
  const [sortBy, setSortBy] = useState("publishedAt");
  const handleSortBy = async (value: string) => {
    console.log(value, "value");
    const { data } = await fetchNews(getOneWeekBefore(), value);
    console.log(data, "data");
    if (data.articles && data.articles.length > 0) {
      setData(data.articles);
      setPrevData(data.articles);
    }

    setSortBy(value);
  };
  return (
    <Wrapper>
      <span>Sort by:</span>
      <Select value={sortBy} onChange={(e) => handleSortBy(e.target.value)}>
        <option value={"publishedAt"}>Last published</option>
        <option value={"popularity"}>Popularity</option>
        <option value={"relevancy"}>Relevancy</option>
      </Select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Select = styled.select`
  border: none;
  outline: none;
  padding: 0.5rem;
  border-radius: 4px;
`;

export default Filters;
