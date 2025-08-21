const express = require('express');
const router = express.Router();
const formController = require('../controllers/formsController');
const { validateForm } = require('../middlewares/validation');

// Rota para criar formulário
router.post('/', validateForm, formController.create);

// Rota para listar formulários
router.get('/', formController.getAll);

module.exports = router;
