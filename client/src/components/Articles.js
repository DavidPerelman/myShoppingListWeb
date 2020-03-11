import React, { Component } from 'react'

export default class Articles extends Component {
    state = {
        data: null
      };
    
      componentDidMount() {
        this.callBackendAPI()
          .then(res => this.setState({ data: res.message }))
          .catch(err => console.log(err));
      }
        // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
      callBackendAPI = async () => {
        const response = await fetch('http://localhost:5000/articles');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };

    render() {
        return (
            <div>
                <header className="App-header">
          <h1 className="App-title">Welcome to Articles</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
            </div>
        )
    }
}
