
require('dotenv').config();
const app = require('./src/app');
const port = process.env.PORT || 3000;

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM recebido, fechando servidor...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT recebido, fechando servidor...');
  process.exit(0);
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}!`);
  console.log(`Health check: http://localhost:${port}/health`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
