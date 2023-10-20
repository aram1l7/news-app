"use client";
import { fetchByTitle } from "@/app/api/getNews";
import Article from "@/components/Article";

import React, { useEffect, useState } from "react";

type Props = {
  params?: {
    slug?: string;
  };
  searchParams: {
    desc: string;
  };
};

function Page(props: Props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { searchParams } = props;

  useEffect(() => {
    async function fetchArticle() {
      setLoading(true);
      try {
        console.log(searchParams.desc, "desc");

        const { data } = await fetchByTitle(searchParams.desc);
        console.log(data, "data");
        setData(data.articles[0]);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }

    fetchArticle();
  }, []);

  return <Article isLoading={loading} data={data} />;
}

export default Page;
