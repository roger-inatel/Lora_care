// Este arquivo define a página de detalhes dos pacientes.
// Aqui, os usuários podem visualizar, editar ou excluir informações dos pacientes cadastrados.

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detalhes.css';

export default function Detalhes() {
  const location = useLocation();
  const navigate = useNavigate();
  const paciente = location.state?.paciente;

  if (!paciente) {
    return (
      <div className="detalhes-container">
        <h2>Nenhum paciente logado.</h2>
        <button onClick={() => navigate('/login')}>Ir para Login</button>
        <button onClick={() => navigate('/')}>Voltar à Home</button>
      </div>
    );
  }

  return (
    <div className="detalhes-container">
      <h2>Informações do Paciente</h2>
      <ul className="detalhes-list">
        <li><strong>Nome:</strong> {paciente.nome}</li>
        <li><strong>Idade:</strong> {paciente.idade}</li>
        <li><strong>Altura:</strong> {paciente.altura}</li>
        <li><strong>Peso:</strong> {paciente.peso}</li>
        <li><strong>Sexo:</strong> {paciente.sexo}</li>
        <li><strong>Endereço:</strong> {paciente.endereco}</li>
        <li><strong>Contato:</strong> {paciente.contato}</li>
        <li><strong>Condições Médicas:</strong> {paciente.condicoes_medicas}</li>
      </ul>
      <button onClick={() => navigate('/')}>Voltar à Home</button>
    </div>
  );
}
