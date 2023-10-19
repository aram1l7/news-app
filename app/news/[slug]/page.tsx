"use client";
import { fetchByTitle } from "@/app/api/getNews";
import { getOneWeekBefore, reverseSlug } from "@/utils";
import Article from "@/views/Article";

import React, { useEffect, useState } from "react";

function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = useState([]);
  const realTitle = reverseSlug(params.slug);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      try {
        const { data } = await fetchByTitle(getOneWeekBefore(), realTitle);
        console.log(data, "data");
        setData(data.articles[0]);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }

    fetchArticle();
  }, []);

  return <Article data={data} />;
}

export default Page;
