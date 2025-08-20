import React from 'react';
import './SobreNosAccordion.css';

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-title">{title}</span>
        <svg
          className="accordion-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
}

export default function SobreNos() {
  return (
    <div className="app-container">
      <div className="blog-header">
        <h1>Sobre o LoRaCare</h1>
        <p>Conectando Saúde onde Ninguém Chega</p>
      </div>

      <AccordionItem title="Quem Somos e Nossa Missão">
        <p>
          O LoRaCare é uma iniciativa dedicada a superar as barreiras geográficas e sociais que impedem o acesso à saúde em regiões remotas. Utilizando tecnologia de ponta, nossa missão é conectar pacientes e profissionais de saúde, garantindo monitoramento e cuidado mesmo nos lugares mais isolados.
        </p>
        <p>
          Com uma abordagem centrada no paciente, buscamos transformar o cuidado com a saúde, promovendo inclusão e equidade.
        </p>
      </AccordionItem>

      <AccordionItem title="O Desafio: Saúde em Regiões Remotas">
        <p>
          Atualmente, muitos indivíduos em áreas rurais e remotas enfrentam dificuldades para acessar serviços básicos de saúde. A falta de infraestrutura, profissionais e recursos cria um cenário de vulnerabilidade que exige soluções inovadoras.
        </p>
        <p>
          O LoRaCare surge como uma resposta a esse desafio, utilizando tecnologia de comunicação de longo alcance para conectar pacientes e profissionais de saúde, superando barreiras e promovendo cuidado contínuo.
        </p>
      </AccordionItem>

      <AccordionItem title="A Solução LoRaCare: Monitoramento Conectado e Acessível">
        <p>
          A tecnologia LoRa permite a transmissão de dados vitais em longas distâncias com baixo consumo de energia, ideal para regiões com infraestrutura limitada. Com dispositivos conectados, é possível monitorar sinais vitais, enviar alertas e garantir acompanhamento médico em tempo real.
        </p>
        <p>
          Essa inovação está transformando o cuidado com a saúde, permitindo que pacientes em áreas remotas recebam atenção médica de qualidade, independentemente de sua localização.
        </p>
      </AccordionItem>

      <div className="static-section">
        <h2>Obrigado por Conhecer o LoRaCare!</h2>
        <p>
          Agradecemos o seu interesse em nossa missão. Estamos comprometidos em levar saúde de qualidade a todos.
        </p>
        <button onClick={() => window.location.href = '/pacientes'}>
          Cadastre um Paciente
        </button>
      </div>
    </div>
  );
}
