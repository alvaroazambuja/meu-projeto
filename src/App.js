
import { useState } from 'react';
import './App.css';
import Seu from './components/SeuNome';


function App() {
  const [nomeeeee, ttt]=useState()
  
    return (
    <div className="App"> 
      <h1>State Lift</h1>
      <Seu  algo={ttt}/>
      {nomeeeee} 
       
            
    </div>
  );
}

export default App;
