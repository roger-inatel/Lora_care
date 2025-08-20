import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('/api/login', form);
      if (response.data && response.data.success) {
        navigate('/detalhes', { state: { paciente: response.data.paciente } });
      } else {
        setError('E-mail ou senha inválidos!');
      }
    } catch (err) {
      setError('Erro ao conectar com o servidor.');
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login do Paciente</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="E-mail do paciente"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
            required
          />
          <button type="submit">Entrar</button>
          <button type="button" onClick={() => navigate('/cadastro')}>Criar conta</button>
        </form>
        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
}
