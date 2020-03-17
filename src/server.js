const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); 

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o Banco de dados
mongoose.connect('mongodb+srv://hiago:hiago123@cluster0-pldcg.mongodb.net/users', { useNewUrlParser: true });
requireDir('./models');

// Rotas
app.use('/', require('./routes'));

// Porta 
app.listen(3333); 

