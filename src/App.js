import React, {  useEffect, useState } from "react";
import Display from "./components/display/Display";
import Gameover from "./components/gameover/Gameover";
import {CircleProgress} from 'react-gradient-progress';
import  './style.css'




function App() {

  
  // var treino = 100;
  // var passeio = 100;
  // var remedio = 100;

  const [fome, setfome] = useState(100);
  const [treino, setTreino] = useState(100)
  const [passeio, setPasseio] = useState(100)
  const [remedio, setRemedio] = useState(100)

  const total = fome + treino + passeio + remedio

 function AddFome () {
   setfome(fome + 10)
 }

 function AddTreino () {
  setTreino(treino + 10)
}

function AddPasseio () {
  setPasseio(passeio + 10)
}

function AddRemedio () {
  
setRemedio(remedio + 10)
  
}
console.log(remedio)


  useEffect(()=> {
    if (fome !== 0) {
      setTimeout(() => {
      setfome(fome -3)
    }, 80000);
    }
    
  },[fome])

  useEffect(()=> {
    if (treino !== 0) {
      setTimeout(() => {
      setTreino(treino -2)
    }, 50000);
    }
    
  },[treino])
     
  useEffect(()=> {
    if (passeio !== 0) {
      setTimeout(() => {
      setPasseio(passeio -3)
    }, 70000);
    }
     
  },[passeio])

  
    if (remedio !== 0) {
      setTimeout(() => {
      setRemedio(remedio -5)
      
    }, 1000);
    }

  return (
    <div className="container">
      <div className="ProgressContainer">
        <CircleProgress id='fome 'percentage={fome} strokeWidth={8} width={100} />
        <CircleProgress id='treino' percentage={treino} strokeWidth={8} width={100} />
        <CircleProgress percentage={passeio} strokeWidth={8} width={100} />
        <CircleProgress percentage={remedio} strokeWidth={8} width={100} />
      </div>
      {total !== 0 ? <Display /> : <Gameover /> }
      <nav>
                <button onClick={AddFome} >fome</button>
                <button onClick={AddTreino}>treino</button>
                <button onClick={AddPasseio}>passeio</button>
                <button onClick={AddRemedio}>remedio</button>
            </nav>
      
        
    </div>
  );
}

export default App;
