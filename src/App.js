import './App.css';
import samsunglogo from './img/samsung-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const manejarResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }else {
      alert("Por favor ingrese valores para poder calcular");
    }
    
  };

  return (
    <div className="App">
      <div className='samsung-logo-contenedor'>
        <img 
        src={samsunglogo} 
        className='samsung-logo'
        alt='Logo de Samsung'/> 
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Pantalla input={input}/>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={manejarResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
      
    </div>
  );
}

export default App;
