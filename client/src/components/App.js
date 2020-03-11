import React, { Component} from "react";
import Articles from './Articles';
import PostArticle from './PostArticle';

class App extends Component{

  render(){
    return(
        <div className="App">
        <Articles />
        <PostArticle />
      </div>
    );
  }
}

export default App;