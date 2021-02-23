
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
  //map returns an array
  const comments = post.comments.map( comment => (<Comment content = {comment}/>))

  return (
    <div className="App">
      {/* can use varaibales with curly brackets */}
      <h1>{post.title}</h1>
      <p>by {post.author}</p>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <p>{post.comments[0]}</p>
      
      <p>another way of showing a comments(below) by only component</p>
      <Comment name="Nikki" content= "Hello there!" />

      <p>another way of showing all comments(below) by map and component</p>
      {comments}
    </div>
  );
}

export default App;
