const Dto = require('../../core/Dto')

class personaDto extends Dto {
    /**
     * getPersona
     * 
     * @description metodo para listar persona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPersona(params){
        const objPersona = this.getModel('persona')
        return objPersona.getPersona(params)
    }
    /**
     * postPersona
     * 
     * @description metodo para insertar persona
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPersona(params){
        const objPersona = this.getModel('persona')
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
        const objPersona = this.getModel('persona')
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
        const objPersona = this.getModel('persona')
        return objPersona.deletePersona(params)
    }
}

module.exports = personaDto