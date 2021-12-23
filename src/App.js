import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import { Home } from "./pages/Home/Home";
import { CreatePost } from "./pages/CreatePost/CreatePost";
import { Login } from "./pages/Login/Login";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";

import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login'
    });
  };
  return (
    <div className="App">
      <Router>
        <nav>
          <Container maxWidth="lg">
            <ButtonGroup variant="contained" size="medium" color="primary">
              <Button>
                <Link to="/">Home</Link>
              </Button>
              <Button>
                <Link to="/create-post">Create Post</Link>
              </Button>
              {!isAuth ? (
                <Button>
                  <Link to="/login">Login</Link>
                </Button>
              ) : (
                <Button onClick={signUserOut}>Log out</Button>
              )}
            </ButtonGroup>
          </Container>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route
            path="/login"
            element={<Login setIsAuth={setIsAuth}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
