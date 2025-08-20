const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

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

// Rota para adicionar paciente
app.post('/pacientes', (req, res) => {
  const { nome, idade, altura, peso, sexo, endereco, contato, condicoes_medicas } = req.body;
  const query = 'INSERT INTO pacientes (nome, idade, altura, peso, sexo, endereco, contato, condicoes_medicas) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [nome, idade, altura, peso, sexo, endereco, contato, condicoes_medicas], (err, result) => {
    if (err) {
      console.error('Erro ao inserir paciente:', err);
      res.status(500).send('Erro ao inserir paciente');
      return;
    }
    res.status(200).send('Paciente inserido com sucesso!');
  });
});

// Rota para listar pacientes
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

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
