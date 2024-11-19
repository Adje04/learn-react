import React, { useState } from "react";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import { Link } from "react-router-dom";

export default function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Vamos Equipo",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      like: false,
    },
    {
      id: 2,
      title: "Bueno jugador",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      like: false,
    },
    {
      id: 3,
      title: "Football, the greatest sport of all time",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      like: false,
    },
    {
      id: 4,
      title: "The GOAT, Messi",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      like: false,
    },
  ]);

  const like_post = (data) => {
    const copied_data = [...posts];
    const index = posts.indexOf(data);
    copied_data[index] = { ...posts[index], like: !posts[index].like };
    setPosts(copied_data);
    console.log(copied_data);
  };

  const delete_post = (id) => {
    const new_data = posts.filter((p) => p.id != id);
    setPosts(new_data);
  };

  const total_posts = posts.filter((p) => p.like);
  return (
    <div>

   
      <div className="app">
        <Counter />
        <Counter />
        <Counter />
      </div>

      <div className="app-post">
        <div>
          <Navbar total_liked_posts={total_posts.length} />
        </div>

        <div className="app">
          {posts.map((p) => (
            <Post
              data={p}
              key={p.id}
              like_post={like_post}
              delete_post={delete_post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
