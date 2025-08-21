const validateForm = (req, res, next) => {
  const { nome, email, whatsapp } = req.body;
  
  // Verificar campos obrigatórios
  if (!nome || !email || !whatsapp) {
    return res.status(400).json({ 
      success: false, 
      message: 'Nome, email e whatsapp são obrigatórios' 
    });
  }
  
  // Validar email simples
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email inválido' 
    });
  }
  
  // Validar whatsapp (apenas números e pelo menos 10 dígitos)
  const whatsappClean = whatsapp.replace(/\D/g, '');
  if (whatsappClean.length < 10) {
    return res.status(400).json({ 
      success: false, 
      message: 'WhatsApp deve ter pelo menos 10 dígitos' 
    });
  }
  
  // Limpar dados
  req.body.nome = nome.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.whatsapp = whatsappClean;
  
  next();
};

module.exports = { validateForm };
