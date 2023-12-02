import './App.css';
import Botones from './componentes/Botones';
import Pantalla from './componentes/Pantalla';

function App() {
  return (
    <div className="App">
      <h1>Calculadora Simple</h1>
      <div className="Calculadora">
        <Pantalla />
        <div className="Contenedor">
          <div className="Fila">
            <Botones>MC</Botones>
            <Botones>raiz</Botones>
            <Botones>^</Botones>
            <Botones>AC</Botones>
            <Botones>C</Botones>
          </div>
          <div className="Fila">
            <Botones>MR</Botones>
            <Botones>7</Botones>
            <Botones>4</Botones>
            <Botones>1</Botones>
            <Botones>0</Botones>
          </div>
          <div className="Fila">
            <Botones>M-</Botones>
            <Botones>8</Botones>
            <Botones>5</Botones>
            <Botones>2</Botones>
            <Botones>=</Botones>
          </div>
          <div className="Fila">
            <Botones>M+</Botones>
            <Botones>9</Botones>
            <Botones>6</Botones>
            <Botones>3</Botones>
            <Botones>.</Botones>
          </div>
          <div className="Fila">
            <Botones>PA</Botones>
            <Botones>sen</Botones>
            <Botones>tan</Botones>
            <Botones>X</Botones>
            <Botones>+</Botones>
          </div>
          <div className="Fila">
            <Botones>PC</Botones>
            <Botones>cos</Botones>
            <Botones>%</Botones>
            <Botones>/</Botones>
            <Botones>-</Botones>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
