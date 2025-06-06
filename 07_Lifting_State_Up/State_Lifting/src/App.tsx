import { useState } from "react";
import NameInput from "./components/NameInput";
import NamePreview from "./components/NamePreview";
import "./App.css";

const App = () => {
  const [name, setName] = useState<string>("");

  return (
    <div>
      {/* {name} */}
      <h1>Lifting State Up Example</h1>
      <NameInput name={name} onNameChange={setName} />
      <NamePreview name={name} />
    </div>
  );
};

export default App;
