import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Alterar from './pages/alteracao';
import Cadastro from './pages/cadastro';
import Desempenho from './pages/desempenho';
import Documentacao from './pages/documentacao';
import Historico from './pages/historico';
import Login from './pages/login';
import Recurso from './pages/recurso';
import Menu from './components/menu';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/cadastro' element={<Cadastro />} />
            <Route exact path='/alterar' element={<Alterar />} />
            <Route exact path='/recurso' element={<Recurso />} />
            <Route exact path='/desempenho' element={<Desempenho />} />
            <Route exact path='/historico/:idUsuario' element={<Historico />} />
            <Route exact path='/documentacao' element={<Documentacao />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
