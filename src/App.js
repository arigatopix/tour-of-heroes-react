import Dashboard from './componentes/dashboard/Dashboard';
import Heroes from './componentes/heroes/Heroes';

const App = () => {
  return (
    <div className="container">
      <h1>Tour of Hero</h1>
      <Heroes />
      <Dashboard />
    </div>
  );
};

export default App;
