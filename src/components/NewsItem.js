import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease"}}>
          <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675":imageUrl}   className="card-img-top" alt="..." />
          <div   className="card-body">
            <h5   className="card-title">{title}...</h5>
            <p   className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary">By {author} on {date}</small></p>
            <a href={newsUrl} target="_blank"   className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem