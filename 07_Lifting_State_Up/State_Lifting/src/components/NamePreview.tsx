type NamePreviewProps = {
  name: string;
};

const NamePreview = ({ name }: NamePreviewProps) => {
  return <h2>Hello, {name || "Stranger"}!</h2>;
};

export default NamePreview;
