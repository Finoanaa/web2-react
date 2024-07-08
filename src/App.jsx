import {useState} from "react";

// task: string
//
// task: {
//  id: number;
//  title: string;
// }

let id = 1;

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange(ev) {
    setNewTask(ev.target.value);
  }

  function handleAddTask() {
    const toAdd = {
      id: id,
      title: newTask,
    }
    setTasks([...tasks, toAdd])
    setNewTask("");
    id++;
  }

  function handleDeleteTask(id) {
    const filtered = tasks.filter(task => task.id !== id);
    setTasks(filtered);
  }

  function handleUpdateTask(id, newTitle) {
    // clone 'tasks' into newTasks
    const newTasks = [...tasks];
    const index = newTasks.findIndex(task => task.id === id);
    newTasks[index].title = newTitle;
    setTasks(newTasks);
  }

  return (
    <div>
      <ul>
        {tasks.map(task => (
          <li>
            <input
              value={task.title}
              onChange={(ev) => {
                handleUpdateTask(task.id, ev.target.value)
              }}
            />
            <button
              onClick={() => handleDeleteTask(task.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>

      <div>
        <input
          onChange={handleNewTaskChange}
          value={newTask}
        />
        <button onClick={handleAddTask}>add</button>
      </div>
    </div>
  )
}



