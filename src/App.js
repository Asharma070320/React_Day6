import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import { useState } from 'react';

function App() {

  let[As,setAs] = useState(0);

  function getData(information){
    console.log(information);
    if(information==="increase"){
      setAs(As+1);
    }else if(information==="decrease"){
     if(As==0){
      setAs(0)
     }else{
      setAs(As-1)
     }
    }
  }
  console.log(As);
  
  return (
    <div className="container">
      <Navbar send={As}/>
      <Main  data={getData}/>
    </div>
  );
}

export default App;
