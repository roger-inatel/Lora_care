import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleVisitorClick = () => {
    navigate('/home');
  };

  const handleLoginClick = () => {
    if (username === 'admin' && password === '1234') {
      navigate('/home');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  const handleCreateAccountClick = () => {
    const newUsername = prompt('Digite o nome de usuário para criar a conta:');
    const newPassword = prompt('Digite a senha para criar a conta:');

    if (newUsername && newPassword) {
      localStorage.setItem('user', JSON.stringify({ username: newUsername, password: newPassword }));
      alert('Conta criada com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos para criar a conta.');
    }
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <img src="/public/vite.svg" alt="LoRaCare Logo" className="landing-logo" />
        <h1>LoRaCare: Saúde Remota ao Seu Alcance</h1>
        <p>Monitoramento remoto de dados vitais para regiões rurais e remotas.</p>
      </header>
      <main className="landing-main">
        <section className="login-section">
          <h2>Login</h2>
          <div className="login-form">
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLoginClick} className="login-button">Fazer Login</button>
            <button onClick={handleCreateAccountClick} className="create-account-button">Criar Primeiro Acesso</button>
          </div>
        </section>
        <section className="visitor-section">
          <h2>Visitante</h2>
          <p>Entre como visitante para explorar o site.</p>
          <button onClick={handleVisitorClick} className="visitor-button">Entrar como Visitante</button>
        </section>
        <section className="benefits-section">
          <div className="benefit">
            <img src="/public/icons/health.svg" alt="Acesso à Saúde" className="benefit-icon" />
            <h3>Acesso à Saúde</h3>
            <p>Monitore pacientes em áreas de difícil acesso.</p>
          </div>
          <div className="benefit">
            <img src="/public/icons/detection.svg" alt="Detecção Precoce" className="benefit-icon" />
            <h3>Detecção Precoce</h3>
            <p>Identifique alterações nos sinais vitais rapidamente.</p>
          </div>
          <div className="benefit">
            <img src="/public/icons/connectivity.svg" alt="Conectividade Robusta" className="benefit-icon" />
            <h3>Conectividade Robusta</h3>
            <p>Comunicação eficiente em longas distâncias.</p>
          </div>
        </section>
        <button onClick={() => navigate('/pacientes')} className="start-button">Comece a Cuidar</button>
      </main>
      <footer className="landing-footer">
        <p>&copy; 2025 LoRaCare. Todos os direitos reservados.</p>
        <nav className="footer-nav">
          <a href="#">Sobre Nós</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
          <a href="#">Política de Privacidade</a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
