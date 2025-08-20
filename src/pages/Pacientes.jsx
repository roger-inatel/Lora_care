import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Pacientes.css';

function CadastroPacientes() {
  const [formData, setFormData] = useState({
    nome: '', email: '', senha: '', sexo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/pacientes', formData)
      .then(() => {
        alert('Paciente cadastrado com sucesso!');
        setFormData({ nome: '', email: '', senha: '', sexo: '' });
      })
      .catch(() => {
        alert('Erro ao cadastrar paciente!');
      });
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h1>Cadastro de Pacientes</h1>
        <p>Suas informações são tratadas com segurança e confidencialidade.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome *</label>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha *</label>
            <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="sexo">Sexo *</label>
            <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <div className="button-group">
            <button type="submit" className="btn-primary">Cadastrar Paciente</button>
            <button type="button" className="btn-secondary" onClick={() => navigate('/')}>Voltar</button>
            <button type="button" className="btn-secondary" onClick={() => navigate('/sobre-nos')}>Conheça nosso objetivo</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroPacientes;
