import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
  static defaultProps = {
    pageSize: 10,
    q: 'general',
  }

  static propTypes = {
    pageSize: PropTypes.number,
    q: PropTypes.string,

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.q)} - News App`;
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=b5a37808e52643909043e4847b57dd4d&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1});
    const url = `https://newsapi.org/v2/everything?q=${this.props.q}&apiKey=b5a37808e52643909043e4847b57dd4d&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
       articles: this.state.articles.concat(parsedData.articles),
       totalResult: parsedData.totalResult,
       loading: false,
       })
  };
  

  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>Top Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className='Container'>
          
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            })}

</div>

          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News