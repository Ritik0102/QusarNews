import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const[articles, setArticles] = useState([])
  const[page, setPage] = useState(1)
  const[loading, setLoading] = useState(false)
  const[totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  document.title = `${capitalizeFirstLetter(props.category)} - QusarNews`


  const updateNews =async()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
  }

  useEffect(() =>{
    updateNews();
  },[]);
  

  const fetchMoreData = async() => {
      setPage(page + 1)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults) 
      setLoading(false)
  };

    return (
      <>
        <h1 className='text-center my-3' style={{paddingTop : "50px", color : props.mode === "light" ? "black" : "white"}}>QusarNews - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading &&<Spinner/>}
        >
        <div className='container'>
        <div className='row'>
        {articles.map((element) => {
          return <div className='col-md-4 my-2' key ={element.url}>
            <NewsItem title = {element.title?element.title:""} description = {element.description?element.description:""} newsUrl = {element.url?element.url:""} imgUrl = {element.urlToImage} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  
}

News.defaultProps ={
  category : "general",
  pageSize : 6
}

News.propTypes = {
  category : PropTypes.string,
  pageSize : PropTypes.number
}

export default News
