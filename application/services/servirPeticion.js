const fs = require('fs');
const obtenerPeticion = (baseUrl) => {
    const separarBaseUrl = baseUrl.split('/')  
    return {controller:separarBaseUrl[2],funcion:separarBaseUrl[3]}
}

const obtenerObjController = (controller) => {
    try{
        const path = controller.replace('Controller','')

        if(!fs.existsSync(`./application/business/${path}/${controller}.js`)){
            throw new Error('Invalid controller')
        }
    
        const newController = require(`../business/${path}/${controller}.js`)
        return new newController()
    }catch(err){

        throw new Error(err.message)
    }
}

const validarFuncion = (funcion,controller,method,nameController) => {
    
    if(!funcion.toLowerCase().includes(method.toLowerCase())){
        throw new Error(`No existe el metodo(${funcion}) del tipo ${method}`)
    }

    if(funcion in controller === false){
        throw new Error(`No existe el metodo(${funcion}) del tipo ${method} en el controlador ${nameController}`)
    }
}

module.exports =  servirPeticion = async (req,res,next)  => {
    try{

        if(req.token.rutaLibre){
            
           return next()
        }
        const { controller , funcion } = obtenerPeticion(req.baseUrl)        
        
        if(!controller){
            throw new Error("Invalid controller")
        }

        if(!funcion){
            throw new Error("Invalid funcion")
        }

        const obtenerController = await obtenerObjController(controller)

        await validarFuncion(funcion, obtenerController, req.method, controller)

        const realizarPeticion = await obtenerController[funcion](req.body)
        
        return res.json(realizarPeticion)

    }catch(err){
        res.json({error:err.message}).status(404)
    }
}