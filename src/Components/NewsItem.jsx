import React from "react"
import image from "../assets/image2.jpeg" // Import your default image here

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 news-item"
      style={{
        maxWidth: "345px",
        display: "inline-block",
        margin: "0 10px 10px 0",
      }}
    >
      <img
        src={src ? src : image}
        className="card-img-top"
        style={{ height: "200px", width: "100%", objectFit: "cover" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : ""}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  )
}

export default NewsItem
