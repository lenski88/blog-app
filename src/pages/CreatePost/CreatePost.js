import React, { useReducer } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const initialState = {
  titleText: "",
  postText: "",
};

const CHANGE_TITLE = "CHANGE_TITLE";
const CHANGE_POST = "CHANGE_POST";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE: {
      return { ...state, titleText: action.payload };
    }
    case CHANGE_POST: {
      return { ...state, postText: action.payload };
    }
    default:
      return state;
  }
}

export const CreatePost = ({ isAuth }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const postsCollection = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postsCollection, {
      title: state.titleText,
      text: state.postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return isAuth ? (
    <Container maxWidth="md" className="createPostContainer">
      <h1>Create a post</h1>
      <TextField
        value={state.titleText}
        onChange={(eo) =>
          dispatch({ type: CHANGE_TITLE, payload: eo.target.value })
        }
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth
        label="Title"
        placeholder="Title..."
        autoFocus
      />
      <TextField
        value={state.postText}
        onChange={(eo) =>
          dispatch({ type: CHANGE_POST, payload: eo.target.value })
        }
        variant="outlined"
        color="primary"
        margin="normal"
        fullWidth
        multiline
        rows={15}
        label="Post"
        placeholder="Post..."
      />
      <Button variant="contained" color="primary" onClick={createPost}>
        Submit post
      </Button>
    </Container>
  ) : (
    <h1>You need to register to create posts</h1>
  );
};
