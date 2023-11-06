import './App.css';
import './css/estilos.css'
import Cotizador from './componentes/Cotizador/Cotizador';
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Historial from './componentes/Historial/Historial';
import { AppContextProvider } from './componentes/Context/ContextApp';

function App() {

  return (
    <div className="App">
      <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cotizador />} />
          <Route path='/historial' element={< Historial />} />
        </Routes>
      </BrowserRouter>
      </AppContextProvider>
    </div>
  );
}

export default App;
