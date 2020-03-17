const express = require('express');
const routes = express.Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');

// Controller
const UserControllers = require('./Controllers/UserController');
const upload = multer(uploadConfig);

// Rotas
routes.get('/users', UserControllers.index);
routes.get('/users/:id', UserControllers.show);
routes.post('/users', upload.single('thumbnail'), UserControllers.store);
routes.put('/users/:id', UserControllers.update);
routes.delete('/users/:id', UserControllers.destroy);

module.exports = routes;
