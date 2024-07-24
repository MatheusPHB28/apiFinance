// importar a biblioteca mysql2 e criar a conexão com banco de dados 

const mysql = require('mysql2'); // importar o pacote mysql2 para conectar 

const db = mysql.createConnection({
    host:process.env.DB_HOST, //endereçoo do servidor de banco de dados
    user:process.env.DB_USER, // nome de usuario para acessar o banco de dados
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
});

db.connect((err) =>{
    if(err){
        console.log('Erro ao conectar ao Banco de Dados.', err);
        return;
    }
        console.log('Conectado ao Banco de Dados Mysql');   
});

module.exports=db; //exportar a conexão para ser usada em outros arquivos