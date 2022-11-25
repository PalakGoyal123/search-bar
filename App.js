import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [text, setText] = useState('');
  const [debounce, setDebounce] = useState('');

const handleChange =(value)=>{
setText(value)

}
useEffect(() => {
  const id =setTimeout(()=>setDebounce(text),1000);
  return ()=>clearTimeout(id);
  },[text]);
  return (
    <div className="App">
     <input type = "text" onChange={(e)=>handleChange(e.target.value)} />
      <h3>Normal output</h3>
      {text}
      <h3>Debounce output</h3>
      {debounce}
    
    </div>
  );
}

export default App;
