
import './App.css';
import Comment from './Comment'

function App() {
  //name and store variables before return statements
  const name = "Nikki"
  const post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
  }
  return (
    <div className="App">
      {/* can use varaibales with curly brackets */}
      <h1>{post.title}</h1>
      <p>by {post.author}</p>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <p>{post.comments[0]}</p>
      <Comment content= "hello!" />
    </div>
  );
}

export default App;
