
import './App.css';
import React, { Component} from 'react';
import Comment from './Comment'


class App extends Component {
  state = {
    title: "Dinosaurs are awesome",
    authors: ["Stealthy Stegosaurus", "Tiny trex","iguanadon Ivory"],
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
  }

  editBody = () =>{
    this.setState({
      body : prompt('What should the new body be?')
    })
  }
  
render(){
  const comments = this.state.comments.map((comment, index)=> (<Comment content = {comment} key= {index}/>))
  return (
    <div className="App">

      <h1>{this.state.title}</h1> 
      <p>Written by {this.state.authors[0]}</p>
      <p>Written by {this.state.authors[1]}</p>
      <p>Written by {this.state.authors[2]}</p>
      <p>{this.state.body}</p>
      <button onClick = {this.editBody} >Edit Body</button>
      <h3>Comments:</h3>
      <p>{comments}</p>
      
    </div>
  );
}
}

export default App;
