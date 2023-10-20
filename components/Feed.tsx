import React, {
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import Card from "./Card";
import Search from "./Search";
import Filters from "./Filters";

const MemoizedCard = React.memo(Card);


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
            <MemoizedCard {...item} key={item.publishedAt} />
            //api doesnt give any id publishedAt is the most unique key here
          );
        })}
      </FeedContainer>
    </Wrapper>
  );
}

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width:576px){
    flex-direction: column;
    gap: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1.5rem;
  max-width: 1300px;
  gap:1.5rem;
  margin: 0px auto;
`;

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  grid-auto-rows: max-content;
`;

export default Feed;
