type UserCardProps = {
  name: string;
  age: number;
  email: string;
  isVerified: boolean;
};
const UserCard = ({ name, age, email, isVerified }: UserCardProps) => {
  return (
    <div style={styles.card}>
      <h4>Name: {name}</h4>
      <p><b>Age:</b> {age}</p>
      <p><b>Email :</b> {email}</p>
      <p><b>Status:</b> {isVerified ? "Accept" : "Reject"}</p>
    </div>
  );
};
const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1rem",
    maxWidth: "300px",
    margin: "1rem auto",
    backgroundColor: "#f9f9f9",
    color: "black",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontweight: "bolder",
  },
};
export default UserCard;
