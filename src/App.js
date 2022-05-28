import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './componentes/dashboard/Dashboard';
import Heroes from './componentes/heroes/Heroes';
import HeroForm from './componentes/heroes/HeroForm';

const App = () => {
  return (
    <div className="container">
      <h1>Tour of Hero</h1>

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
        <Route path="heroes" element={<Heroes />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="heroes-form/*">
          <Route path=":id" element={<HeroForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
