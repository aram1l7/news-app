"use client";
import Article from "@/views/Article";
import { useSearchParams } from "next/navigation";

import React from "react";

function Page({ params }: { params: { slug: string } }) {
  console.log(params, "params");

  return <Article />;
}

export default Page;
