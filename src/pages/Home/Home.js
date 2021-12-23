import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

import './Home.css'
import Container from "@material-ui/core/Container";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const postsCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollection);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
    console.log('test')
  });
  return (
    <Container maxWidth='md'>
      {posts.map((post) => {
        return (
            <div key={post.id} className="postBlock">
              <h1>{post.title}</h1>
              <p>{post.text}</p>
              <h5>@{post.author.name}</h5>
            </div>
        );
      })}
    </Container>
  );
};
