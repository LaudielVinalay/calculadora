import './App.css';
import Botones from './componentes/Botones';
import BotonesClear from './componentes/BotonesClear';
import Pantalla from './componentes/Pantalla';
import BotonBorrar from './componentes/BotonBorrar';
import BotonTrig from './componentes/BotonTrigonometrico';
import BotonLogs from './componentes/BotonLogs';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {


  const[input,setInput] = useState('');

  const addInput = (value) =>{
    if(value === 'sqrt'){
      setInput(input + 'sqrt(');
    }
    else{
      setInput(input + value);
    }
  }

  const substractInput = () =>{
    if (input){
      try{
        setInput(input.substring(0,input.length - 1));
      }catch(error){
        setInput('');
      } 
    }
  }

  const trigonometric = (value) => {
      setInput(input + value + '(');
  }

  const setLog = (value) => {
    setInput(input + value + '(');

    if(value === 'ln'){
      setInput('log(');
    }
    
  }

  const Resultado = () =>{
    if (input){
        
        try{
          setInput(evaluate(input));
        }catch(error){
          setInput('Syntax Error');
        }
    }
    else{
      alert("Favor de ingresar valores para efectuar la operación");
    }
  }

  return (
    <div className="App">
      <h1>Calculadora Simple</h1>
      <div className="Calculadora">
        <div className="Contenedor">
          <Pantalla input={input} /> 
          <div className="Fila">
            <BotonBorrar BorrarCaracter={substractInput}>&#9003; </BotonBorrar>
            <Botones Click={addInput}>sqrt</Botones>
            <Botones Click={addInput}>^</Botones>
            <BotonesClear Clear={()=>setInput("")}>AC</BotonesClear>
            <BotonesClear Clear={()=>setInput("")}>C</BotonesClear>
          </div>
          <div className="Fila">
            <Botones Click={addInput}>,</Botones>
            <Botones Click={addInput}>7</Botones>
            <Botones Click={addInput}>4</Botones>
            <Botones Click={addInput}>1</Botones>
            <Botones Click={addInput}>.</Botones>
          </div>
          <div className="Fila">
            <BotonLogs Log={setLog}>ln</BotonLogs>
            <Botones Click={addInput}>8</Botones>
            <Botones Click={addInput}>5</Botones>
            <Botones Click={addInput}>2</Botones>
            <Botones Click={addInput}>0</Botones>
          </div>
          <div className="Fila">
            <BotonLogs Log={setLog}>log10</BotonLogs>
            <Botones Click={addInput}>9</Botones>
            <Botones Click={addInput}>6</Botones>
            <Botones Click={addInput}>3</Botones>
            <Botones Click={addInput}>-</Botones>
          </div>
          <div className="Fila">
            <Botones Click={addInput}>(</Botones>
            <BotonTrig EvalTrig={trigonometric}>sin</BotonTrig>
            <BotonTrig EvalTrig={trigonometric}>tan</BotonTrig>
            <Botones Click={addInput}>*</Botones>
            <Botones Click={addInput}>+</Botones>
          </div>
          <div className="Fila">
            <Botones Click={addInput}>)</Botones>
            <BotonTrig EvalTrig={trigonometric}>cos</BotonTrig>
            <Botones Click={addInput}>%</Botones>
            <Botones Click={addInput}>/</Botones>
            <Botones Click={Resultado}>=</Botones>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;