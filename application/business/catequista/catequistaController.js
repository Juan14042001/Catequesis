const Controller = require('../../core/Controller')

class catequistaController extends Controller {
    /**
     * getCatequista
     * 
     * @description metodo para listar catequista
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getCatequista(params){
        const objCatequista = this.getDto('catequista')
        const data= await objCatequista.getCatequista(params)
        return {rows:data.length, data:data}
    }
    /**
     * postCatequista
     * 
     * @description metodo para insertar catequista
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCatequista(params){
        const objCatequista = this.getDto('catequista')
        return objCatequista.postCatequista(params)
    }
    /**
     * putCatequista
     * 
     * @description metodo para actualizar catequista
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putCatequista(params){
        const objCatequista = this.getDto('catequista')
        return objCatequista.putCatequista(params)
    }
    /**
     * deleteCatequista
     * 
     * @description metodo para eliminar catequista
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteCatequista(params){
        const objCatequista = this.getDto('catequista')
        return objCatequista.deleteCatequista(params)
    }
}

module.exports = catequistaController