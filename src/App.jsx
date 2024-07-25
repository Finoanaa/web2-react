import {useEffect, useState} from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET"});
        const json = await response.json();
        setUsers(json);
        setIsLoading(false);
      } catch (e) {
        console.log('error');
      }
    }

    doFetch();
  }, []);

  return (
    <>
      {isLoading ? 'getting data...' : null}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username}
          </li>
        ))}
      </ul>
    </>
  )
}
