import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Profile />
      <Home />
      <CreateQuote />
    </div>
  );
}

export default App;
