import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pacientes from './pages/Pacientes';
import Detalhes from './pages/Detalhes';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="page"><Home /></div>} />
          <Route path="/pacientes" element={<div className="page"><Pacientes /></div>} />
          <Route path="/detalhes" element={<div className="page"><Detalhes /></div>} />
          <Route path="/login" element={<div className="page"><Login /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
