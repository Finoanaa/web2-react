import {useState} from "react";

// previous task structure: string
//
// current task structure: {
//  id: number;
//  title: string;
//  priority: "medium" | "low" | "high"
// }

// to get unique id for each created task
let id = 1;

const priorities = ["medium", "low", "high"]

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [searchKeyword, setSearchKeyword] = useState("");

  const [newTask, setNewTask] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("low");

  const [sortOrder, setSortOrder] = useState("ASC");
  const [priorityFilter, setPriorityFilter] = useState("all");
  
  function handleNewTaskChange(ev) {
    setNewTask(ev.target.value);
  }
  
  function handleAddTask() {
    const toAdd = {
      id: id,
      title: newTask,
      priority: newTaskPriority,
    }
    setTasks([...tasks, toAdd])
    setNewTask("");
    setNewTaskPriority("medium");
    id++;
  }
  
  function handleDeleteTask(id) {
    const filtered = tasks.filter(task => task.id !== id);
    setTasks(filtered);
  }
  
  function handleUpdateTask(id, newTitle, newPriority) {
    // clone 'tasks' into newTasks
    const newTasks = [...tasks];
    const index = newTasks.findIndex(task => task.id === id);
    newTasks[index].title = newTitle;
    newTasks[index].priority = newPriority;
    setTasks(newTasks);
  }
  
  const filteredTasks = tasks
    .filter(
      task => (
      task.title.includes(searchKeyword))
      && (priorityFilter === "all" || task.priority === priorityFilter),
    )
    .sort((task1, task2) => {
      return sortOrder === "ASC" ?
        task1.title.localeCompare(task2.title)
        : task2.title.localeCompare(task1.title)
    })
  return (
    <div>
      <div>
        <input
          onChange={handleNewTaskChange}
          value={newTask}
        />
        <select
          value={newTaskPriority}
          onChange={ev => {
            setNewTaskPriority(ev.target.value);
          }}
        >
          {priorities.map(priority => (
            <option key={priority} value={priority}>{priority}</option>
          ))}
        </select>
        <button onClick={handleAddTask}>add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li>
            <input
              value={task.title}
              onChange={(ev) => {
                handleUpdateTask(task.id, ev.target.value, task.priority)
              }}
            />
            <select
              value={task.priority}
              onChange={(ev) => {
                handleUpdateTask(task.id, task.title, ev.target.value)
              }}
            >
              {priorities.map(priority => (
                <option value={priority}>{priority}</option>
              ))}
            </select>

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
          value={searchKeyword}
          onChange={ev => {
            setSearchKeyword(ev.target.value);
          }}
        />
        <select
          value={priorityFilter}
          onChange={(ev) => {
            setPriorityFilter(ev.target.value)
          }}
        >
          <option value="all">All</option>
          {priorities.map(priority => (
            <option value={priority}>{priority}</option>
          ))}
        </select>


        <select
          value={sortOrder}
          onChange={(ev) => {
            setSortOrder(ev.target.value)
          }}
        >
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>

        <div>
          search result ({filteredTasks.length})
        </div>
        <ul>
          {filteredTasks.map(task => (
            <li>
              {task.title} . {task.priority}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
