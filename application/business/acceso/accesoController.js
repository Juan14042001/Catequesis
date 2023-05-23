const Controller = require('../../core/Controller')

class accesoController extends Controller {
    /**
     * getAcceso
     * 
     * @description metodo para listar acceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getAcceso(params){
        const objAcceso = this.getDto('acceso')
        const data= await objAcceso.getAcceso(params)
        return {rows:data.length, data:data}
    }
    /**
     * postAcceso
     * 
     * @description metodo para insertar acceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAcceso(params){
        const objAcceso = this.getDto('acceso')
        return objAcceso.postAcceso(params)
    }
    /**
     * putAcceso
     * 
     * @description metodo para actualizar acceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putAcceso(params){
        const objAcceso = this.getDto('acceso')
        return objAcceso.putAcceso(params)
    }
    /**
     * deleteAcceso
     * 
     * @description metodo para eliminar acceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteAcceso(params){
        const objAcceso = this.getDto('acceso')
        return objAcceso.deleteAcceso(params)
    }
}

module.exports = accesoController