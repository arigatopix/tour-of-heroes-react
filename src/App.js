import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Dashboard from './componentes/pages/dashboard/Dashboard';
import Heroes from './componentes/pages/heroes/Heroes';
import HeroForm from './componentes/pages/heroes/HeroForm';
import Main from './componentes/pages/main/Main';

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="heroes" element={<Heroes />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="heroes-form" element={<HeroForm />}></Route>
        <Route path="heroes-form/*">
          <Route path=":id" element={<HeroForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
