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
import Filters from "./Filters";

function Feed({
  data,
  setData,
  prevNews,
  setPrevData,
}: {
  data: any[];
  prevNews: any[];
  setData: (val: any[]) => void;
  setPrevData: (val: any[]) => void;
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
      <TopBar>
        <Search search={search} setSearch={setSearch} />
        <Filters setPrevData={setPrevData} setData={setData} />
      </TopBar>
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

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
