
// type is a TypeScript keyword used to define custom types (like interfaces).

type CardProps={
    children:React.ReactNode;
    title?:string;


}

function Card({title,children}:CardProps) {
  return (
    <div style={styles.card}>
        {title&& <h2 style={styles.title}>{title}</h2>}
        {children}
    </div>
  )
}

const styles = {
  card: {
       border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "1.5rem",
    maxWidth: "400px",
    margin: "1rem auto",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    color:"black",
    fontFamily:"Times New Roman, sans-serif",
    fontSize:"1.4rem",
    fontWeight: "bolder",
    
  },
  title: {
    marginBottom:"1rem",
  }
};

export default Card