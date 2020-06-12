import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character'
import './App.css';

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([])
  const [errorState, setErrorState] = useState('')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=> {
     axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results)
      setCharacterData(response.data.results)
    })
    .catch(err => {
      console.log(`Error Message: ${err}`)
    })
  }, []);
   


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character/>
    </div>
    
  );
}

export default App;
