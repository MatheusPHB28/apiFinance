const express = require('express'); // Importar a framework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); // Importar o controlador

// Defenir uma rota para para obter todas as transaçoes
router.get('/', transactionsController.getAllTransactions);


// Definindo uma rota para adcionar uma nova transação
router.post('/', transactionsController.addTransactions);


// Definindo uma rota para atualizar uma transação existente (subistituição completa
router.put('/:id',transactionsController.updateTransactionPut);

//router.patch('/:id', transactionsController.updateTransactionPatch)

// Exportar o roteador
module.exports = router;

