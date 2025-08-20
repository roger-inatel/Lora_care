import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('currentUser');
    navigate('/login');
  }

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Início</Link>
        <Link to="/pacientes" className="sidebar-link">Pacientes</Link>
        <Link to="/detalhes" className="sidebar-link">Detalhes</Link>
      </nav>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <div className="account-info">
        <h3>Conta: {currentUser?.username || 'Visitante'}</h3>
        <Link to="/forgot-password">Esqueci minha senha</Link>
      </div>
    </aside>
  );
}
