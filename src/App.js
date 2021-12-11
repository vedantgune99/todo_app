import NavBar from "./Components/NavBar";
import AddTask from "./Components/AddTask";
import AllTasks from "./Components/AllTasks";

const TasksData = [
  {
    id: 1,
    title: "Practise React JS!",
    desc: "Practise React JS for an hour and practise about hooks, effects, etc!",
  },
  {
    id: 2,
    title: "Play Table Tennis",
    desc: "Play 5 matches of table tennis with practising backhand smash!",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <AddTask />
        <AllTasks tasks={TasksData} />
      </header>
    </div>
  );
}

export default App;
