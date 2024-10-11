import React from "react"
import image from "../assets/image2.jpeg" // Import default image

const NewsItem = ({ title, description = "", src = image, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 news-item"
      style={{ maxWidth: "345px", margin: "0 10px 10px 0" }}
    >
      <img
        src={src}
        className="card-img-top"
        alt="news"
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description.slice(0, 90)}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsItem
