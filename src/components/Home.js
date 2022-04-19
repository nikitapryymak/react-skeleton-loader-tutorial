import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

import UserCard from "./UserCard";

const Home = () => {
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
    <>
      <h1 style={{ marginBottom: "1.5rem" }}>Users</h1>
      <div className="user-container">
        {isLoading && <CardSkeleton cards={8} />}
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};
export default Home;
