import { useNavigate } from 'react-router-dom';
import healthImage from '/images/health.svg';
import detectionImage from '/images/detection.svg';
import connectivityImage from '/images/connectivity.svg';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="homepage" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', lineHeight: '1.6', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <section className="hero" style={{ padding: '4rem 2rem', textAlign: 'center', backgroundImage: 'linear-gradient(to bottom, #e3f2fd, #f8f9fa)' }}>
        <h1 style={{ color: '#0056b3', fontWeight: 'bold', fontSize: '3rem', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
          LoRaCare: Saúde Remota ao Seu Alcance
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#333', marginBottom: '2rem' }}>
          Monitoramento remoto de dados vitais para regiões rurais e remotas.
        </p>
        <button
          onClick={() => navigate('/pacientes')}
          className="cta-button"
          style={{ fontSize: '1.5rem', padding: '1.2rem 3rem', background: '#28a745', color: '#fff', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: '600', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          Comece a Cuidar
        </button>
        <button
          onClick={() => navigate('/sobre-nos')}
          className="cta-button"
          style={{ fontSize: '1.5rem', padding: '1.2rem 3rem', background: '#0056b3', color: '#fff', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: '600', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          Saiba Mais Sobre Nós
        </button>
        <button
          onClick={() => navigate('/detalhes')}
          className="cta-button"
          style={{ fontSize: '1.5rem', padding: '1.2rem 3rem', background: 'green', color: '#fff', borderRadius: 10, border: 'none', cursor: 'pointer', fontWeight: '600', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginTop: '1rem' }}
        >
          Já cadastrados!
        </button>
      </section>

      {/* Pillars Section */}
      <section className="pillars" style={{ padding: '4rem 2rem', display: 'flex', justifyContent: 'space-around', backgroundColor: '#ffffff' }}>
        <div className="pillar" style={{ textAlign: 'center', maxWidth: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '2rem' }}>
          <img src={healthImage} alt="Acesso à Saúde" style={{ width: '120px', marginBottom: '1rem' }} />
          <h2 style={{ color: '#006064', fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>Acesso à Saúde</h2>
          <p style={{ color: '#555', fontSize: '1.5rem', textAlign: 'justify' }}>
            Monitore pacientes em áreas de difícil acesso com tecnologia avançada.
          </p>
        </div>
        <div className="pillar" style={{ textAlign: 'center', maxWidth: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '2rem' }}>
          <img src={detectionImage} alt="Detecção Precoce" style={{ width: '120px', marginBottom: '1rem' }} />
          <h2 style={{ color: '#006064', fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>Detecção Precoce</h2>
          <p style={{ color: '#555', fontSize: '1.5rem', textAlign: 'justify' }}>
            Identifique alterações nos sinais vitais rapidamente e com precisão.
          </p>
        </div>
        <div className="pillar" style={{ textAlign: 'center', maxWidth: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px', padding: '2rem' }}>
          <img src={connectivityImage} alt="Conectividade Robusta" style={{ width: '120px', marginBottom: '1rem' }} />
          <h2 style={{ color: '#006064', fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>Conectividade Robusta</h2>
          <p style={{ color: '#555', fontSize: '1.5rem', textAlign: 'justify' }}>
            Comunicação eficiente em longas distâncias, superando barreiras geográficas.
          </p>
        </div>
      </section>

      {/* Restored Content Below Pillars */}
      <section className="additional-info" style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0056b3', marginBottom: '1rem' }}>Por que escolher o LoRaCare?</h2>
        <p style={{ fontSize: '1.5rem', color: '#333', lineHeight: '1.8' }}>
          O LoRaCare oferece soluções inovadoras para monitoramento remoto de saúde, garantindo conectividade robusta e detecção precoce em áreas de difícil acesso.
        </p>
      </section>
    </div>
  );
}
