import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";

import "./Home.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

export const Home = ({ refresh, isAuth }) => {
  const [posts, setPosts] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const postsCollection = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollection);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [isDelete, refresh]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setIsDelete(!isDelete);
  };

  return (
    <Container maxWidth="md">
      {posts.length
        ? posts.map((post) => {
            return (
              <div key={post.id} className="postBlock">
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <h5>@{post.author.name}</h5>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </Button>
                )}
              </div>
            );
          })
        : null}
    </Container>
  );
};
