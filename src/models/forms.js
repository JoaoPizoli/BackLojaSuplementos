const prisma = require('../utils/prisma');

class Forms {
  async new({ nome, email, whatsapp }) {
    const form = await prisma.form.create({ 
      data: { nome, email, whatsapp },
      select: { id: true, nome: true, email: true, createdAt: true }
    });
    return form;
  }
  
  async getAll() {
    return await prisma.form.findMany({
      select: { 
        id: true, 
        nome: true, 
        email: true, 
        whatsapp: true, 
        createdAt: true 
      },
      orderBy: { createdAt: 'desc' }
    });
  }
}

module.exports = new Forms();
