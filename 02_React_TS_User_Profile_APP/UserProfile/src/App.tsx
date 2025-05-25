import UserCard from './components/UserCard';
import './App.css'

function App() {
  

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Profiles</h1>
      <UserCard
        name="Alice Johnson"
        age={30}
        email="alice@example.com"
        isVerified={true}
      />
      <UserCard
        name="Bob Smith"
        age={25}
        email="bob@example.com"
        isVerified={false}
      />
    </div>
  );
}

export default App
