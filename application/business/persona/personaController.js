const Controller = require('../../core/Controller')

class personaController extends Controller {
    /**
     * getPersona
     * 
     * @description metodo para listar persona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getPersona(params){
        const objPersona = this.getDto('persona')
        const data= await objPersona.getPersona(params)
        return {rows:data.length, data:data}
    }
    /**
     * postPersona
     * 
     * @description metodo para insertar persona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPersona(params){
        const objPersona = this.getDto('persona')
        return objPersona.postPersona(params)
    }
    /**
     * putPersona
     * 
     * @description metodo para actualizar persona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putPersona(params){
        const objPersona = this.getDto('persona')
        return objPersona.putPersona(params)
    }
    /**
     * deletePersona
     * 
     * @description metodo para eliminar persona
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePersona(params){
        const objPersona = this.getDto('persona')
        return objPersona.deletePersona(params)
    }
}

module.exports = personaController