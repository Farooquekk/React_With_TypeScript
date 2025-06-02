import {useState,useEffect} from 'react';

type User = {
    id:number;
    name:string;
    email:string;
};

const UserList = ()=>{
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  }, []); // Run once on mount

  if (loading) return <p>Loading users...</p>;

  return <div>
			<h2>User List</h2>
			<ul>
				{users.map((user) => (
          <li key={user.id}> ID : {user.id}
						<strong> Name : {user.name}</strong> &nbsp;
             Email : {user.email} 
					</li>
          
				))}
			</ul>
		</div>
}

export default UserList;