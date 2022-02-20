import "./App.css";
import NavBar from "./components/NavBar.js";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <NavBar />
      {element}
    </div>
  );
}

export default App;
