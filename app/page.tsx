"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchNews } from "./api/getNews";
import Feed from "@/views/Feed";

const getOneWeekBefore = () => {
  const today = new Date();
  today.setDate(today.getDate() - 7); // Subtract 7 days from the current date

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const oneWeekAgo = `${year}-${month}-${day}`;

  return oneWeekAgo;
};

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const getNews = async () => {
    setLoading(true);
    try {
      const { data } = await fetchNews(getOneWeekBefore());
      console.log(data, "data");
      if (data.status === "ok" && data.articles) {
        setNews(data.articles);
      } else {
        setError("Something went wront, please try again");
      }
    } catch (e) {
      console.log(e, "error");
    }
    setLoading(false);
  };

  return (
    <MainContainer>
      {news.length < 1 ? (
        <>
          <h1>Read the latest news <br/> from the Middle East</h1>
          <Button
            onClick={() => {
              getNews();
            }}
            disabled={loading}
          >
            {loading ? "Loading news..." : "Get news"}
          </Button>
          {error && <Error>{error}</Error>}
        </>
      ) : (
        <Feed data={news} setData={setNews} />
      )}
    </MainContainer>
  );
}

const Error = styled.span`
  color: #e80707;
  font-size: 14px;
`;

const MainContainer = styled.main`
  display: flex;
  color: white;
  background: black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  min-height: 100vh;

  & > h1 {
    font-size: 58px;
  }
`;
const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  padding: 0.75rem 1.75rem;
  font-size: 20px;
  background-color: #d439aa;
  font-weight: 500;
  border-radius: 6px;

  &:disabled {
    opacity: 0.5;
  }
`;
