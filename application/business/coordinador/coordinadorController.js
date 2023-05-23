const Controller = require('../../core/Controller')

class coordinadorController extends Controller {
    /**
     * getCoordinador
     * 
     * @description metodo para listar coordinador
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getCoordinador(params){
        const objCoordinador = this.getDto('coordinador')
        const data= await objCoordinador.getCoordinador(params)
        return {rows:data.length, data:data}
    }
    /**
     * postCoordinador
     * 
     * @description metodo para insertar coordinador
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCoordinador(params){
        const objCoordinador = this.getDto('coordinador')
        return objCoordinador.postCoordinador(params)
    }
    /**
     * putCoordinador
     * 
     * @description metodo para actualizar coordinador
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putCoordinador(params){
        const objCoordinador = this.getDto('coordinador')
        return objCoordinador.putCoordinador(params)
    }
    /**
     * deleteCoordinador
     * 
     * @description metodo para eliminar coordinador
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteCoordinador(params){
        const objCoordinador = this.getDto('coordinador')
        return objCoordinador.deleteCoordinador(params)
    }
}

module.exports = coordinadorController