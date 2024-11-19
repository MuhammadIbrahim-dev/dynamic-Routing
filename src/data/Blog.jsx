import React from "react";
import Header from "./Header";
import'../App.css'
import { blogs } from "./data2/blogs";
import { Link } from "react-router-dom";
export function Blog() {
let allblog = blogs.map((v,i)=>{
  return(
  <div className="items" key={i}>
    <h3>{v.title}</h3>
    <p>{v.body}</p>
    <button> <Link to={`/blog/${v.id}`}>Read more</Link> </button>
  </div>)
})
  return (
    <div>
      <Header />
      <div className="container">
        {allblog}
      </div>
    </div>
  );
}
