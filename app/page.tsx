"use client";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const getNews = () => {
    router.push("/news")
  };
  return (
    <MainContainer>
      <>
        <h1>
          Read the latest news <br /> from the Middle East
        </h1>
        <Button
          onClick={() => {
            getNews();
          }}
        >
          Get news
        </Button>
      </>
    </MainContainer>
  );
}



const MainContainer = styled.main`
  display: flex;
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
