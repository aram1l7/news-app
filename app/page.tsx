"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchNews } from "./api/getNews";
import Feed from "@/views/Feed";
import { getOneWeekBefore } from "@/utils";

export default function Home() {
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

  return (
    <MainContainer>
      {news.length < 1 ? (
        <>
          <h1>
            Read the latest news <br /> from the Middle East
          </h1>
          <Button
            onClick={() => {
              getNews();
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="spinner"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Loading...
              </>
            ) : (
              "Get news"
            )}
          </Button>
          {error && <Error>{error}</Error>}
        </>
      ) : (
        <Feed
          data={news}
          prevNews={prevNews}
          setPrevData={(val: any[]) => setPrevNews(val)}
          setData={(val: any) => setNews(val)}
        />
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
  font-size: 18px;
  background-color: #d439aa;
  font-weight: 500;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`;
