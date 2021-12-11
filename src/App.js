// import "./App.css";
import { Navbar } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import AddTask from "./Components/AddTask";
import AllTasks from "./Components/AllTasks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <AddTask />
        <AllTasks />
      </header>
    </div>
  );
}

export default App;
