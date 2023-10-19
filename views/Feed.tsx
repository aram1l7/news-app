import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Card from "./Card";

function Feed({
  data,
  setData,
}: {
  data: any[];
  setData: Dispatch<SetStateAction<never[]>>;
}) {
  console.log(data, "data");
  console.log(setData, "setdata");

  return (
    <FeedContainer>
      {data.map((item) => {
        return (
          <Card {...item} key={item.publishedAt} /> //api doesnt give any id publishedAt is the most unique key here
        );
      })}
    </FeedContainer>
  );
}

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1300px;
  gap: 2rem;
  margin:4rem auto;
  grid-auto-rows: max-content;
`;

export default Feed;
