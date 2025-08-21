const express = require('express');
const cors = require('cors');
const formRouter = require('./routers/routers');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// CORS
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://starshape-lancamentos.com.br' 
    : true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Rotas principais
app.use('/api/forms', formRouter);

// Middleware de tratamento de erros (deve ser o último)
app.use(errorHandler);

module.exports = app;
