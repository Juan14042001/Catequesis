const Controller = require('../../core/Controller')

class tableDefaultController extends Controller {
    /**
     * getTableDefault
     * 
     * @description metodo para listar tableDefault
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getTableDefault(params){
        const objTableDefault = this.getDto('tableDefault')
        const data= await objTableDefault.getTableDefault(params)
        return {rows:data.length, data:data}
    }
    /**
     * postTableDefault
     * 
     * @description metodo para insertar tableDefault
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTableDefault(params){
        const objTableDefault = this.getDto('tableDefault')
        return objTableDefault.postTableDefault(params)
    }
    /**
     * putTableDefault
     * 
     * @description metodo para actualizar tableDefault
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putTableDefault(params){
        const objTableDefault = this.getDto('tableDefault')
        return objTableDefault.putTableDefault(params)
    }
    /**
     * deleteTableDefault
     * 
     * @description metodo para eliminar tableDefault
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteTableDefault(params){
        const objTableDefault = this.getDto('tableDefault')
        return objTableDefault.deleteTableDefault(params)
    }
}

module.exports = tableDefaultController