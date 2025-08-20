import './Home.css';
import { useNavigate } from 'react-router-dom';

// Este arquivo define a estrutura da página inicial simples.
// Geralmente usada para introduzir o site ou redirecionar para outras seções.

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Título da página inicial */}
      <header className="home-header">
        <h1>LoRaCare: Saúde Remota ao Seu Alcance</h1>
        <p>Monitoramento remoto de dados vitais para regiões rurais e remotas.</p>
      </header>

      <section className="home-features">
        <div className="feature">
          <img src="/images/health.svg" alt="Saúde" style={{width: '48px', height: '48px'}} />
          <h2>Acesso à Saúde</h2>
          <p>Monitore pacientes em áreas de difícil acesso.</p>
        </div>
        <div className="feature">
          <h2>Detecção Precoce</h2>
          <p>Identifique alterações nos sinais vitais rapidamente.</p>
        </div>
        <div className="feature">
          <h2>Conectividade Robusta</h2>
          <p>Comunicação eficiente em longas distâncias, superando barreiras geográficas.</p>
        </div>
      </section>

      {/* Botões de navegação */}
      <footer className="home-footer">
        <button onClick={() => navigate('/cadastro')} className="start-button">Começar a Cuidar</button>
        <button onClick={() => navigate('/login')} className="login-button">Já cadastrados!</button>
      </footer>
    </div>
  );
}