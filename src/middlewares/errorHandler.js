const errorHandler = (err, req, res, next) => {
  console.error('Erro capturado:', err);
  
  // Erro do Prisma (email duplicado, etc)
  if (err.code === 'P2002') {
    return res.status(409).json({
      success: false,
      message: 'Este email já está cadastrado'
    });
  }
  
  // Erro de validação do Prisma
  if (err.code && err.code.startsWith('P')) {
    return res.status(400).json({
      success: false,
      message: 'Erro de validação dos dados'
    });
  }
  
  // Erro genérico
  res.status(500).json({
    success: false,
    message: 'Erro interno do servidor'
  });
};

module.exports = errorHandler;
