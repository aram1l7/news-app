"use client";

import React, { useEffect, useState } from "react";
import { fetchNews } from "../api/getNews";
import { getOneWeekBefore } from "@/utils";
import Feed from "@/components/Feed";
import styled from "styled-components";

function Page() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prevNews, setPrevNews] = useState<any[]>([]);

  const [error, setError] = useState("");

  const getNews = async () => {
    setLoading(true);
    try {
      const { data } = await fetchNews(getOneWeekBefore());
      console.log(data, "data");
      if (data.status === "ok" && data.articles) {
        setNews(data.articles);
        setPrevNews(data.articles);
      } else {
        setError("Something went wront, please try again");
      }
    } catch (e) {
      console.log(e, "error");
    }
    setLoading(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      {error ? (
        <Error>{error}</Error>
      ) : (
        <Feed
          data={news}
          prevNews={prevNews}
          setPrevData={(val: any[]) => setPrevNews(val)}
          setData={(val: any) => setNews(val)}
        />
      )}
    </div>
  );
}

const Error = styled.span`
  color: #e80707;
  font-size: 14px;
`;

export default Page;
