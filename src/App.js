import NavBar from "./Components/NavBar";
import AddTask from "./Components/AddTask";
import AllTasks from "./Components/AllTasks";
import { useState } from "react";

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
  const [tasksData, setTasksData] = useState(TasksData);
  const addItemHandler = (item) => {
    setTasksData((prevData) => [...prevData, item]);
    console.log(tasksData);
  };

  const removeTaskItemHandler = (taskItem) => {
    console.log(taskItem);
    const updatedTasksData = tasksData.filter(
      (item) => taskItem !== item.title
    );
    setTasksData(updatedTasksData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <AddTask onAddItem={addItemHandler} />
        <AllTasks onRemoveTask={removeTaskItemHandler} tasks={tasksData} />
      </header>
    </div>
  );
}

export default App;
