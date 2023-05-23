const Controller = require('../../core/Controller')

class personaSalonController extends Controller {
    /**
     * getPersonaSalon
     * 
     * @description metodo para listar personaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getPersonaSalon(params){
        const objPersonaSalon = this.getDto('personaSalon')
        const data= await objPersonaSalon.getPersonaSalon(params)
        return {rows:data.length, data:data}
    }
    /**
     * postPersonaSalon
     * 
     * @description metodo para insertar personaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPersonaSalon(params){
        const objPersonaSalon = this.getDto('personaSalon')
        return objPersonaSalon.postPersonaSalon(params)
    }
    /**
     * putPersonaSalon
     * 
     * @description metodo para actualizar personaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putPersonaSalon(params){
        const objPersonaSalon = this.getDto('personaSalon')
        return objPersonaSalon.putPersonaSalon(params)
    }
    /**
     * deletePersonaSalon
     * 
     * @description metodo para eliminar personaSalon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePersonaSalon(params){
        const objPersonaSalon = this.getDto('personaSalon')
        return objPersonaSalon.deletePersonaSalon(params)
    }
}

module.exports = personaSalonController