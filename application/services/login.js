const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserController = require('../business/user/userController');

const validarLogin = async (username,password) => {

    try{
        
        const dataUser = await new UserController().getUser({user: username, method:'login'})

        if(!dataUser || dataUser.data.length === 0) {
            throw new Error('Usuario y contraseña incorrectos')
        }

        const [user] = [...dataUser.data]

        const validarContraseña = bcrypt.compareSync(password, user.password)
        if(!validarContraseña){
            throw new Error('Usuario y contraseña incorrectos')
        }
        return user
    
    }catch(e){
        throw new Error(e.message)
    }
}

module.exports = login = async (req,res,next)  => {
    try{
        const { user , password } = req.body;

    const getUser = await validarLogin(user, password)
   
    const token_generate =  jwt.sign({user:getUser.username,id:getUser.id_user,id_persona:getUser.id_persona},process.env.KEY_SECRET_JWT,{expiresIn: '1d' });
    
    return res.json({
        validate:true,
        token:token_generate
    })
   
    }catch(e){
        return res.json({
            validate:false,
            message:e.message
        })
    
    }
}