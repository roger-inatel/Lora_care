import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

const app = express();
const port = 3000;

// Configuração do MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Altere para seu usuário
  password: 'Inatel2026#!', // Altere para sua senha
  database: 'mydb', // Altere para o nome do seu banco
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida!');
});

app.use(bodyParser.json());

// ROTAS DE PACIENTES
// Adicionar paciente
app.post('/pacientes', (req, res) => {
  const { nome, senha, idade, altura, peso, sexo, endereco, contato, condicoes_medicas } = req.body;
  const query = 'INSERT INTO pacientes (nome, senha, idade, altura, peso, sexo, endereco, contato, condicoes_medicas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [nome, senha, idade, altura, peso, sexo, endereco, contato, condicoes_medicas], (err, result) => {
    if (err) {
      console.error('Erro ao inserir paciente:', err);
      res.status(500).send('Erro ao inserir paciente');
      return;
    }
    res.status(200).send('Paciente inserido com sucesso!');
  });
});

// Listar pacientes
app.get('/pacientes', (req, res) => {
  const query = 'SELECT * FROM pacientes';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar pacientes:', err);
      res.status(500).send('Erro ao buscar pacientes');
      return;
    }
    res.status(200).json(results);
  });
});

// Atualizar paciente
app.put('/pacientes/:id', (req, res) => {
  const { id } = req.params;
  const { nome, senha, idade, altura, peso, sexo, endereco, contato, condicoes_medicas } = req.body;
  const query = `
    UPDATE pacientes SET
      nome = ?,
      senha = ?,
      idade = ?,
      altura = ?,
      peso = ?,
      sexo = ?,
      endereco = ?,
      contato = ?,
      condicoes_medicas = ?
    WHERE idPacientes = ?
  `;
  db.query(query, [nome, senha, idade, altura, peso, sexo, endereco, contato, condicoes_medicas, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar paciente:', err);
      res.status(500).send('Erro ao atualizar paciente');
      return;
    }
    res.status(200).send('Paciente atualizado com sucesso!');
  });
});

// Deletar paciente
app.delete('/pacientes/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM pacientes WHERE idPacientes = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar paciente:', err);
      res.status(500).send('Erro ao deletar paciente');
      return;
    }
    res.status(200).send('Paciente deletado com sucesso!');
  });
});

// AUTENTICAÇÃO DE LOGIN
app.post('/api/login', (req, res) => {
  const { nome, senha } = req.body;
  const query = 'SELECT * FROM pacientes WHERE nome = ? AND senha = ?';
  db.query(query, [nome, senha], (err, results) => {
    if (err) {
      console.error('Erro ao autenticar paciente:', err);
      res.status(500).json({ success: false, message: 'Erro no servidor' });
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ success: true, paciente: results[0] });
    } else {
      res.status(401).json({ success: false, message: 'Nome ou senha inválidos' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
