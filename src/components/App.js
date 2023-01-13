import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

const{name, image, about, posts} = blogData;

function App() {
  console.log(blogData.posts);
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name= {name}/>
      <About image={image} about= {about}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
