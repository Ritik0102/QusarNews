import React from 'react'

const NewsItem=(props) => {
    let{title, description, imgUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card mx-2">
        <span className="badge bg-primary" style={{display:"flex", justifyContent: "flex-end", position:"absolute", right:0}}>
          {source}
        </span>
            <img src={imgUrl} className="card-img-top" alt={""}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                <p className="card-text">{description}</p>
                <a href={newsUrl} rel="noopener noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
