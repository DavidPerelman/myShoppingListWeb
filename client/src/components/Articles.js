import React, { Component } from 'react';
import axios from 'axios'

class Articles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    axios.get('http://localhost:5000/articles')
    .then(response => {
      console.log(response)
      this.setState({ articles: response.data.articles })
    })
    .catch(error => {
      console.log(error)
      this.setState({errorMsg: 'Error retrieving data'})
    })
  }

    render() {
      const { articles } = this.state
        return (
            <div>
              {
                articles.map(article => 
                <div key={article._id}>
                  <h1>{article.title}</h1>
                  <h2>{article.description}</h2>
                  <h3>{article.content}</h3>
                </div>
                )
              }
            </div>
        )
    }
}

export default Articles;