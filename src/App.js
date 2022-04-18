import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ marginBottom: "1.5rem" }}>Users</h1>
      <div className="user-container">
        {isLoading && <p>Loading...</p>}

        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
