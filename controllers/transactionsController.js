const db = require('../config/db'); // Importar a conexão com o Banco de dados

// funçao para obter todas as transaçoes

const getAllTransactions = (req, res) => {
    db.query('SELECT * FROM transactions',(err, results) => {
        if(err){
            console.error('Erro ao obter transações', err);
            res.status(500).send('Erro ao obter transações');
            return;
        }
        res.json(results);
    })
}

//Função para adcionar uma nova transação
const addTransactions = (req, resu) => {
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'INSERT INTO transactions (date, amount, description, category, account, user_id)VALUES(?,?,?,?,?,?)',
        [date, amount, description, category, account, user_id],
        (err,res) => {
            if(err){
                console.error('Erro ao adcionar transição', err)
                res.status(500).send('Erro ao adcionar transação')
                return;
            }
            resu.status(201).send('Transação adcionada com sucesso');
        }
    );
};


// Função para atualizar uma transação existente  (substituição completa)
const updateTransactionPut = (req, res) => {
    const {id} = req.params;
    const {date, amount, description, category, account, user_id} =req.body;
    db.query(
        'UPDATE transactions SET date=?, amount=?, description=?, category=?, account=?, user_id=? WHERE id=?',
        [date, amount, description, category, account, user_id,id],
        (err,results) => {
            if(err) {
                console.error('Erroao adcionar transação', err);
                res.status(500).send('Erro ao adcionar transação');
                return;
            }
            res.send('Tansação atualizada com sucesso');
        }

    )
}


module.exports = {
    getAllTransactions,
    addTransactions,
    updateTransactionPut,
    //updateTransactionPatch
}