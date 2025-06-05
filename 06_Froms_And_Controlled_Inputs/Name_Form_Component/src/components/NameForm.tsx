import { useState } from "react";

const NameForm = () => {
  const [name, setName] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedName(name);
    setName("");
  };

  //  must be --> before the return statement
  const styles = {
    form: {
      display: "flex",
      flexDirection: "column" as const,
      maxWidth: "300px",
      margin: "0 auto",
    },
    input: {
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "8px 12px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  //  Our JSX starts herE
  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="nameInput">Enter your name: </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {submittedName && <h2>Hello, {submittedName}!</h2>}
    </div>
  );
};

export default NameForm;
