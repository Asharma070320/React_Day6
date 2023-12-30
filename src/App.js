import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import { useState } from 'react';
import Footer from './Component/Footer';

function App() {

  let[As,setAs] = useState(0);

  function getData(information){
    console.log(information);

    if(information==="increase"){
      setAs(As+1);
    }
    else if(information==="decrease"){
     if(information==0){
      setAs(0)
     }
     else{
       setAs(As-1)
     }
    }
  }
  console.log(As);

function updateValue(){
  setAs(0)
}
  
  return (
    <div className="container">
      <Navbar send={As}/>
      <Main  data={getData} update={updateValue}/>

      
    </div>
  );
}

export default App;
