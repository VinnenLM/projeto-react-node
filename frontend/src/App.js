import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Alterar from './pages/alteracao';
import Cadastro from './pages/cadastro';
import Desempenho from './pages/desempenho';
import Historico from './pages/historico';
import Login from './pages/login';
import Recurso from './pages/recurso';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/cadastro' element={<Cadastro />} />
        <Route exact path='/alterar' element={<Alterar />} />
        <Route exact path='/recurso' element={<Recurso />} />
        <Route exact path='/desempenho' element={<Desempenho />} />
        <Route exact path='/historico/:idUsuario' element={<Historico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
