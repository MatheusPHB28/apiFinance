const express = require('express'); // importa o framework Express
const dotenv = require('dotenv'); // importar o pacote dotenv para genrenciar variaveis de ambientes 
const cors = require('cors'); //importa o pacote cors para para permitir requisiçoes 
const bodyParser = require('body-parser');

// comfigurar as variaveis de ambiente


dotenv.config(); //carrega as variaveis definidas  no arquivo '.env'

// inicializar nova aplicação Express

const app = express(); 

// configurar o cors e o body-parse

app.use(cors()); //habilita o cors para todas as rotas 
app.use(bodyParser.json()); //configura o body-parse para analizar requisiçoes json 


// Rota inicial para testar o servidor

app.get('/',(req, res)=> {
    res.send("Servidor está rolando"); //definir uma rota para testar o servidor
});

//Configurar o servidor para uma porta especifica

const PORT = process.env.PORT || 3000; // Define a porta a partir da variavel
app.listen(PORT,()=> {

    console.log(`servidor rodando na porta ${PORT}`);
});
