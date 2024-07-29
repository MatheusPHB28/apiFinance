const express = require('express'); // Importar a framework express
const router = express.Router(); //Criar um roteador
const transactionsController = require('../controllers/transactionsController'); // Importar o controlador

// Defenir uma rota para para obter todas as transaçoes
router.get('./', transactionsController.getAllTransactions);

// Exportar o roteador

module.exports = router;