import './App.css';
import logo from './imagenes/FreeCodeCampLogo.png';
import Boton from "./componentes/Boton"
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
import { evaluate } from 'mathjs';
import Logo from './componentes/Logo.js';



function App() {
  
  const [input, setInput] = useState('');

  const agregarInput = val =>{

    setInput(input + val);
  };

  const calcularResultado = () =>{
    if (input){
      setInput(evaluate(input));
    }else{
      alert("por favor ingresar valores para realizar los calculos")
    }
   
  };
  
  return (
    <div className="App">
      <Logo />
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Borrar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
