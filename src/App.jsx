import {useState} from "react";
import {useFetch} from "./useFetch";


export default function App() {
  const [resource, setResource] = useState("users");
  const [data, {isLoading}] = useFetch(resource);

  return (
    <div>
      <div>
        <select onChange={ev => setResource(ev.target.value)}>
          <option value="users">users</option>
          <option value="posts">posts</option>
        </select>

        <h1>{resource}</h1>
        <ul>
          {isLoading ? "loading..." : ""}

          {data.map(entry => (
            <li>
              {entry.name || entry.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
