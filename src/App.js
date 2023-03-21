import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import FreeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClis] = useState(0);

  const manejarClic = () => {
    setNumClis(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClis(0);
  }

  return (
    <div className='App'>
      <div className='freeCodeCamp-logo-contenedor'>
        <img 
          className='freeCodeCamp-logo'
          src={FreeCodeCampLogo} 
          alt='Logo de freeCodeCamp' 
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
