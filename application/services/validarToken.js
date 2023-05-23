const jwt = require('jsonwebtoken');
const moment = require('moment')
const UserController = require('../business/user/userController');

const crearToken = async (token,req) => {
    try{
        const dataToken = jwt.decode(token, process.env.KEY_SECRET_JWT)
        const users = await new UserController().getUser({username:dataToken.user, method:'acceso'})

        if(  !users ){
          throw new Error('Invalid Users')
        }

        const [user] = [...users.data]

        return {
            persona:user.id_persona,
            acceso:user.id_acceso,
            username:user.username,
            year:new Date().getFullYear(),
            host:req.hostname ,
            baseUrl:req.baseUrl,
            day: new moment().format("YYYY-MM-DD")
        }

    }catch(err){
        throw Error(err.message)
    }
}


const rutasLibres = () => {
    return [
        '/api/register-online/src/estilos.css',
        '/api/register-online/src/script.js'
    ]
}


module.exports =  validarToken = async (req,res,next) => {
    try{
        const token = req.headers.authorization || req.headers.token

        const obtenerRutasLibres = await rutasLibres()

        if(obtenerRutasLibres.includes(req.baseUrl)) {
            req.token ={
                rutaLibre:true
            }
            return next()
        }

        if(!token){
            throw new Error('No authorization')
        }

        jwt.verify(token,process.env.KEY_SECRET_JWT)
        req.token = await crearToken(token,req)
        next()
    }catch(err){
        return res.json({message:err.message}).status(404)
    }
}