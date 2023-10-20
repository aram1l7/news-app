import axios from "axios";

export const fetchNews = async (date: string, sortBy = 'publishedAt') => {
  return axios.get(
    `https://newsapi.org/v2/everything?sources=al-jazeera-english,the-jerusalem-post&from=${date}&sortBy=${sortBy}&pageSize=30&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
};

export const fetchByTitle = async (desc: string) => {
  return axios.get(
    `https://newsapi.org/v2/everything?sources=al-jazeera-english,the-jerusalem-post&apiKey=${
      process.env.NEXT_PUBLIC_API_KEY
    }&q=${encodeURIComponent(desc)}&searchIn=description`
  );
};
