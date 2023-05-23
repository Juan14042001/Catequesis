const Controller = require('../../core/Controller')

class apoderadoController extends Controller {
    /**
     * getApoderado
     * 
     * @description metodo para listar apoderado
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getApoderado(params){
        const objApoderado = this.getDto('apoderado')
        const data= await objApoderado.getApoderado(params)
        return {rows:data.length, data:data}
    }
    /**
     * postApoderado
     * 
     * @description metodo para insertar apoderado
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postApoderado(params){
        const objApoderado = this.getDto('apoderado')
        return objApoderado.postApoderado(params)
    }
    /**
     * putApoderado
     * 
     * @description metodo para actualizar apoderado
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putApoderado(params){
        const objApoderado = this.getDto('apoderado')
        return objApoderado.putApoderado(params)
    }
    /**
     * deleteApoderado
     * 
     * @description metodo para eliminar apoderado
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteApoderado(params){
        const objApoderado = this.getDto('apoderado')
        return objApoderado.deleteApoderado(params)
    }
}

module.exports = apoderadoController