import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './componentes/pages/dashboard/Dashboard';
import Heroes from './componentes/pages/heroes/Heroes';
import HeroForm from './componentes/pages/heroes/HeroForm';
import Main from './componentes/pages/main/Main';

const App = () => {
  return (
    <div className="container">
      <h1>
        <Link className="text-reset text-decoration-none" to="/">
          Tour of Hero
        </Link>
      </h1>

      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/heroes">
            Heros
          </Link>
        </li>
      </ul>

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
