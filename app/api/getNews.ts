import axios from "axios";
export const fetchNews = async (date: string) => {
  return axios.get(
    `https://newsapi.org/v2/everything?sources=al-jazeera-english,the-jerusalem-post&from=${date}&sortBy=publishedAt&pageSize=30&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
};

export const fetchByTitle = async (date: string, title: string) => {
  return axios.get(
    `https://newsapi.org/v2/everything?sources=al-jazeera-english,the-jerusalem-post&from=${date}&sortBy=publishedAt&apiKey=${
      process.env.NEXT_PUBLIC_API_KEY
    }&q=${encodeURIComponent(title)}&searchIn=title`
  );
};
