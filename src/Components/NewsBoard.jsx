import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        )
        const data = await response.json()
        setArticles(data.articles)
      } catch (error) {
        console.error("Error fetching news:", error)
      }
    }

    fetchNews()
  }, [category])

  return (
    <div>
      <h2 className="text-center">
        Trending Latest{" "}
        <span className="badge bg-danger text-dark fs-3">Upcoming News</span>
      </h2>
      {articles.map(({ title, description, urlToImage, url }, index) => (
        <NewsItem
          key={index}
          title={title}
          description={description}
          src={urlToImage}
          url={url}
        />
      ))}
    </div>
  )
}

export default NewsBoard
