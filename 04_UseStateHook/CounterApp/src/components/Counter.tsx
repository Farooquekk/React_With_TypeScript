import { useState } from "react";

function Counter() {
 const[count,setCount] = useState<number>(0);

 const increment = ()=>{setCount(count+1)}
 const decrement = ()=>{setCount(count-1)}
 const reset=()=>{setCount(0)}

    return (
      <div style={styles.container}>
        <h3>Counter:{count}</h3>
        <div style={styles.buttons}>
          <button type="button" onClick={increment}>+</button>
          <button type="button" onClick={decrement}>−</button>
          <button type="button" onClick={reset}>Reset</button>
        </div>
      </div>
    );
}

const styles = {
  container: {
    textAlign: "center" as const,
    padding: "1rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    maxWidth: "300px",
    margin: "1rem auto",
    color: "black",
    fontWeight: "bolder",
  },
  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "1rem",
  },
 
};

export default Counter