const Controller = require('../../core/Controller')

class userAccesoController extends Controller {
    /**
     * getUserAcceso
     * 
     * @description metodo para listar userAcceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getUserAcceso(params){
        const objUserAcceso = this.getDto('userAcceso')
        const data= await objUserAcceso.getUserAcceso(params)
        return {rows:data.length, data:data}
    }
    /**
     * postUserAcceso
     * 
     * @description metodo para insertar userAcceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postUserAcceso(params){
        const objUserAcceso = this.getDto('userAcceso')
        return objUserAcceso.postUserAcceso(params)
    }
    /**
     * putUserAcceso
     * 
     * @description metodo para actualizar userAcceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putUserAcceso(params){
        const objUserAcceso = this.getDto('userAcceso')
        return objUserAcceso.putUserAcceso(params)
    }
    /**
     * deleteUserAcceso
     * 
     * @description metodo para eliminar userAcceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteUserAcceso(params){
        const objUserAcceso = this.getDto('userAcceso')
        return objUserAcceso.deleteUserAcceso(params)
    }
}

module.exports = userAccesoController