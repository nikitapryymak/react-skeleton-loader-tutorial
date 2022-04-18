const UserCard = ({ user }) => {
  return (
    <div className="user-card">
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
