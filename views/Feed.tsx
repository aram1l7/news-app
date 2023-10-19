import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import Card from "./Card";
import Search from "./Search";

function Feed({
  data,
  setData,
  prevNews,
}: {
  data: any[];
  prevNews: any[];
  setData: (val: any[]) => void;
}) {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const newData = data.filter((ele) =>
      ele.title.toLowerCase().includes(search.toLowerCase())
    );

    setData(!!search ? newData : prevNews);
  }, [search]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <FeedContainer>
        {data.map((item) => {
          return (
            <Card {...item} key={item.publishedAt} /> //api doesnt give any id publishedAt is the most unique key here
          );
        })}
      </FeedContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 1300px;
  gap: 2rem;
  margin: 1rem auto;
  grid-auto-rows: max-content;
`;

export default Feed;
