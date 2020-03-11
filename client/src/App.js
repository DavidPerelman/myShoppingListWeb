import React, { Component} from "react";
import "./App.css";

class App extends Component{
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
        const response = await fetch('http://localhost:5000/');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };

  render(){
    return(
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;