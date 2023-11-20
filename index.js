const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());


const sequelize = new Sequelize('loja', 'aluno', 'ifpe2023', {
  host: 'localhost',
  dialect: 'mysql',
});

const Produto = sequelize.define('Produto', {
  nome: Sequelize.STRING,
  email: Sequelize.STRING,
  endereco: Sequelize.STRING,
  item: Sequelize.STRING,
  tamanho: Sequelize.STRING,
});


app.post('/addProduto', (req, res) => {
  const dadosDoFormulario = req.body;

  Produto.create({
    nome: dadosDoFormulario.nome,
    email: dadosDoFormulario.email,
    endereco: dadosDoFormulario.endereco,
    item: dadosDoFormulario.item,
    tamanho: dadosDoFormulario.tamanho,
  })
    .then(() => {
      res.send('Dados inseridos com sucesso no banco de dados!');
    })
    .catch((error) => {
      console.error('Erro ao inserir dados no banco de dados:', error);
      res.status(500).send('Erro ao inserir dados no banco de dados.');
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});