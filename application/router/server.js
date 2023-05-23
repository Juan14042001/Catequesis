if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const server = express.Router()
const login = require('../services/login');
const validarToken  = require('../services/validarToken');
const servirPeticion = require('../services/servirPeticion');
const registre = require('../services/registre');

server.post('/login', async (req,res,next) => await login(req,res,next))
server.get('/api/register-online', (req,res,next) => registre(req,res,next))
server.use('/api/*', async(req,res,next) => await validarToken(req,res,next))
server.use('/api/*',async (req,res,next) => await servirPeticion(req,res,next))

module.exports = server