import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Store from './components/tienda/Ecommerce';
import NotFound from './components/error/Error404';
import RegisForm from './components/user/RegisForm';
import LoginForm from './components/user/LoginForm';
import Comuland from './components/landing/Comuland';
import Guialand from './components/landing/Guialand';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/comunidad' element={<Comuland />} />
        <Route path='/guia' element={<Guialand />} />
        <Route path='/tienda' element={<Store />} />
        <Route path='/loginform' element={<LoginForm />} />
        <Route path='/regisform' element={<RegisForm />} />
        <Route path='*' element={<NotFound />} />{' '}
      </Routes>
    </Router>
  );
}

export default App;
