import OutPut from './OutPut';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import Music from './Music';
import Meal from './Meal';
import './App.css';



function App() {

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [pages, setPages] = useState(0)
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="App">
        <div>
          <input onChange={event => setName(event.target.value)}></input>
        </div>
        <div>
          <input onChange={event => setAuthor(event.target.value)}></input>
        </div>
        <div>
          <input onChange={event => setGenre(event.target.value)}></input>
        </div>
        <div>
          <input onChange={event => setPages(event.target.value)}></input>
        </div>      
        
        
        <button onClick={() => setShow(!show)}>
          Show/Hide info
        </button>        
      </div>
      {show ? <OutPut name={name} author={author} genre={genre} pages={pages}/> : null}
      <Music />
      <Meal></Meal>
    </>
    
  );
}

export default App;
