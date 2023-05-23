const Controller = require('../../core/Controller')

class deudaController extends Controller {
    /**
     * getDeuda
     * 
     * @description metodo para listar deuda
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getDeuda(params){
        const objDeuda = this.getDto('deuda')
        const data= await objDeuda.getDeuda(params)
        return {rows:data.length, data:data}
    }
    /**
     * postDeuda
     * 
     * @description metodo para insertar deuda
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postDeuda(params){
        const objDeuda = this.getDto('deuda')
        return objDeuda.postDeuda(params)
    }
    /**
     * putDeuda
     * 
     * @description metodo para actualizar deuda
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putDeuda(params){
        const objDeuda = this.getDto('deuda')
        return objDeuda.putDeuda(params)
    }
    /**
     * deleteDeuda
     * 
     * @description metodo para eliminar deuda
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteDeuda(params){
        const objDeuda = this.getDto('deuda')
        return objDeuda.deleteDeuda(params)
    }
}

module.exports = deudaController