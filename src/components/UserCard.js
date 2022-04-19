import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/post/${user.id}`)}>
      <img className="avatar" src="https://picsum.photos/200" alt="user" />
      <div className="info">
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
};
export default UserCard;
