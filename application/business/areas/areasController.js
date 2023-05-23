const Controller = require('../../core/Controller')

class areasController extends Controller {
    /**
     * getAreas
     * 
     * @description metodo para listar areas
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getAreas(params){
        const objAreas = this.getDto('areas')
        const data= await objAreas.getAreas(params)
        return {rows:data.length, data:data}
    }
    /**
     * postAreas
     * 
     * @description metodo para insertar areas
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAreas(params){
        const objAreas = this.getDto('areas')
        return objAreas.postAreas(params)
    }
    /**
     * putAreas
     * 
     * @description metodo para actualizar areas
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putAreas(params){
        const objAreas = this.getDto('areas')
        return objAreas.putAreas(params)
    }
    /**
     * deleteAreas
     * 
     * @description metodo para eliminar areas
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteAreas(params){
        const objAreas = this.getDto('areas')
        return objAreas.deleteAreas(params)
    }
}

module.exports = areasController