import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './componentes/dashboard/Dashboard';
import Heroes from './componentes/heroes/Heroes';

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
        <Route path="/heroes" element={<Heroes />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default App;
