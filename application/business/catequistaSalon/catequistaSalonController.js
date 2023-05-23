const Controller = require('../../core/Controller')

class catequistaSalonController extends Controller {
    /**
     * getCatequistaSalon
     * 
     * @description metodo para listar catequistaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getCatequistaSalon(params){
        const objCatequistaSalon = this.getDto('catequistaSalon')
        const data= await objCatequistaSalon.getCatequistaSalon(params)
        return {rows:data.length, data:data}
    }
    /**
     * postCatequistaSalon
     * 
     * @description metodo para insertar catequistaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCatequistaSalon(params){
        const objCatequistaSalon = this.getDto('catequistaSalon')
        return objCatequistaSalon.postCatequistaSalon(params)
    }
    /**
     * putCatequistaSalon
     * 
     * @description metodo para actualizar catequistaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putCatequistaSalon(params){
        const objCatequistaSalon = this.getDto('catequistaSalon')
        return objCatequistaSalon.putCatequistaSalon(params)
    }
    /**
     * deleteCatequistaSalon
     * 
     * @description metodo para eliminar catequistaSalon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteCatequistaSalon(params){
        const objCatequistaSalon = this.getDto('catequistaSalon')
        return objCatequistaSalon.deleteCatequistaSalon(params)
    }
}

module.exports = catequistaSalonController