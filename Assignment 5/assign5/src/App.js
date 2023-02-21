import './App.css';
import Card from './components/CardComponent';
function App() {
  return (
    <div className="App" style={{height:"100%"}}>
      <div className='Container'>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}

export default App;
