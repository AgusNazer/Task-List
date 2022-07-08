import './App.css';
//import miLogo from '';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='mi-logo-contenedor'>
      {/* <img 
         src={miLogo}
         className = 'mi-logo'/> */}
      </div>
      <div className='tareas-lista-principal'>
      <h1>Mis tareas</h1>
      <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
