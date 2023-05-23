const Controller = require('../../core/Controller')

class salonController extends Controller {
    /**
     * getSalon
     * 
     * @description metodo para listar salon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getSalon(params){
        const objSalon = this.getDto('salon')
        const data= await objSalon.getSalon(params)
        return {rows:data.length, data:data}
    }
    /**
     * postSalon
     * 
     * @description metodo para insertar salon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postSalon(params){
        const objSalon = this.getDto('salon')
        return objSalon.postSalon(params)
    }
    /**
     * putSalon
     * 
     * @description metodo para actualizar salon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putSalon(params){
        const objSalon = this.getDto('salon')
        return objSalon.putSalon(params)
    }
    /**
     * deleteSalon
     * 
     * @description metodo para eliminar salon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteSalon(params){
        const objSalon = this.getDto('salon')
        return objSalon.deleteSalon(params)
    }
}

module.exports = salonController