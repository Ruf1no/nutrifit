const mysql = require('mysql');

const banco = mysql.createConnection({
  host: 'localhost', // Endereço do banco de dados (pode ser 'localhost' se for local)
  user: 'root', // Usuário do MySQL
  password: '', // Senha do MySQL (deixe em branco se não tiver senha)
  database: 'nutrifit' // Nome do seu banco de dados
});

banco.connect((erro) => {
  if (erro) {
    console.error("Erro ao conectar ao banco de dados:", erro);
  } else {
    console.log("Conexão com o banco de dados bem-sucedida!");
  }
});

module.exports = banco;
