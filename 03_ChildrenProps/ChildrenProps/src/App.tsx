import Card from './components/Card'
import './App.css'

function App() {
 

  return (
    <>
     <h1>Cards</h1>
       <Card title='IronMan'>
        <p>IronMan is a fictional superhero appearing in American comic books published by Marvel Comics.</p>
        <p>He is a wealthy industrialist and genius inventor who created a high-tech suit of armor to save his life and protect the world.</p>
       </Card>

       <Card >
        <p>This is Card with no Title.....</p>
        <p>It can be used to display any content you want.</p>
       </Card>

       <Card title='Fruits'>
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
        </ul>
        <p>Fruits are nature's candy!</p>
       </Card>

       <Card >
        <p>This is another Card with no Title... For Batman</p>
        <p>It can be used to display any content you want.</p>
       </Card>
      
    </>
  )
}

export default App
