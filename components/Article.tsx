import { beautifyDate } from "@/utils";
import React from "react";
import styled from "styled-components";

function Article({ data = {}, isLoading }: { data: any; isLoading: boolean }) {
  const { title, description, urlToImage, publishedAt, author, content, url } =
    data;
  return (
    <Wrapper>
      {isLoading || Object.keys(data).length < 1 ? (
        <div> Loading...</div>
      ) : (
        <div className="inner-wrapper">
          <h1>{title}</h1>
          <div className="img-wrapper">
            <img src={urlToImage} />
          </div>
          <p className="desc">{description}</p>

          <div>
            <p className="content">{content}</p>

            <a href={url} target="_blank">
              Read full article here
            </a>
          </div>

          <p className="published_at">
            Published at: <b>{beautifyDate(publishedAt)}</b>{" "}
          </p>
          <span className="author">
            By: <i>{author}</i>{" "}
          </span>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: black;
  min-height: 100vh;

  color: white;
  padding: 2rem;

  .inner-wrapper {
    max-width: 1000px;
    margin: 0px auto;
  }

  .img-wrapper {
    margin-top: 2rem;
    max-width: 1000px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .published_at {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .desc {
    margin-top: 1rem;
  }

  .content {
    margin-bottom: 1rem;
  }

  a {
    color: #0c92ff;
    text-decoration: none;
  }
`;

export default Article;
