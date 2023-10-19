import { generateSlug } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

function Card({
  author,
  title,
  description,
  urlToImage,
  publishedAt,
}: {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
}) {
  const router = useRouter()
  return (
    <CardView>
      <div className="img-wrapper">
        <img src={urlToImage || "/fallback.jpg"} />
      </div>
      <div>
        <h4 onClick={() => router.push(`/news/${generateSlug(title)}`)}>{title}</h4>
      </div>
    </CardView>
  );
}

const CardView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
  background: white;

  overflow: hidden;

  h4 {
    color: #d439aa;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover {
      text-decoration: underline;
    }
  }

  .img-wrapper {
    width: 100%;
    height: 100%;
    max-height: 280px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

export default Card;
