const mysql = require('mysql2'); //importa o mysql2 para conectar 

const db = mysql.createConnection({
    host:process.env.DB_HOST, //Endereço do servidor do Banco de Dados
    user:process.env.DB_USER, //Nome de Usuário para acessar o Bnaco de Dados
    password:process.env.DB_PASS, //Senha do usuário para acessar o Banco de Dados
    database:process.env.DB_NAME //Nome do Banco de Dados
});

db.connect((err) => {
    if(err) {
        console.error('Erro ao conectar ao Banco de Dados', err); //Exibe a mensagem de erro
    return;
}
    console.log(`Conectado ao Banco de Dados ${process.env.DB_NAME}`); //Exibe a mensagem de sucesso
});

module.exports=db; //Exporta a conexão para ser usada em outros arquivos