type NameInputProps = {
  name: string;
  onNameChange: (newName: string) => void;
};

const NameInput = ({ name, onNameChange }: NameInputProps) => {
  return (
    <div>
      <label htmlFor="name">Enter your name: </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
  );
};

export default NameInput;
