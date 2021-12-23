import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";
import { Login } from "./pages/Login";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Container maxWidth='lg'>
            <ButtonGroup variant="contained" size="medium" color="primary">
              <Button>
                <Link to="/">Home</Link>
              </Button>
              <Button>
                <Link to="/create-post">Create Post</Link>
              </Button>
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            </ButtonGroup>
          </Container>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
