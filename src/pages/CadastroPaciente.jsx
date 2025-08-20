import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CadastroPaciente.css';

export default function CadastroPaciente() {
  const [form, setForm] = useState({
    nome: '', senha: '', idade: '', altura: '', peso: '', sexo: '', endereco: '', contato: '', condicoes_medicas: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('/pacientes', form);
      setSuccess('Paciente cadastrado com sucesso!');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError('Erro ao cadastrar paciente.');
    }
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h2>Cadastro de Pacientes</h2>
        <form onSubmit={handleSubmit} className="cadastro-form">
          <input type="text" name="nome" placeholder="Nome *" value={form.nome} onChange={handleChange} required />
          <input type="password" name="senha" placeholder="Senha *" value={form.senha} onChange={handleChange} required />
          <input type="number" name="idade" placeholder="Idade *" value={form.idade} onChange={handleChange} required />
          <input type="number" name="altura" placeholder="Altura *" value={form.altura} onChange={handleChange} required />
          <input type="number" name="peso" placeholder="Peso *" value={form.peso} onChange={handleChange} required />
          <select name="sexo" value={form.sexo} onChange={handleChange} required>
            <option value="">Selecione o sexo *</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
          <input type="text" name="endereco" placeholder="Endereço *" value={form.endereco} onChange={handleChange} required />
          <input type="text" name="contato" placeholder="Contato *" value={form.contato} onChange={handleChange} required />
          <input type="text" name="condicoes_medicas" placeholder="Condições Médicas *" value={form.condicoes_medicas} onChange={handleChange} required />
          <button type="submit">Cadastrar Paciente</button>
        </form>
        {error && <p className="cadastro-error">{error}</p>}
        {success && <p className="cadastro-success">{success}</p>}
        <button onClick={() => navigate('/login')}>Voltar ao Login</button>
      </div>
    </div>
  );
}
