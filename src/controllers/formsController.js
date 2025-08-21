const Forms = require('../models/forms');

class FormController {
  async create(req, res, next) {
    try {
      const form = await Forms.new(req.body);
      res.status(201).json({ 
        success: true, 
        message: 'Cadastro realizado com sucesso!',
        data: { id: form.id }
      });
    } catch (error) {
      next(error); // Passa o erro para o middleware global
    }
  }
  
  async getAll(req, res, next) {
    try {
      const forms = await Forms.getAll();
      res.status(200).json({ 
        success: true, 
        data: forms 
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FormController();
