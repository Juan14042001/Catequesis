const Dto = require('../../core/Dto')

class catequistaDto extends Dto {
    /**
     * getCatequista
     * 
     * @description metodo para listar catequista
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getCatequista(params){
        const objCatequista = this.getModel('catequista')
        return objCatequista.getCatequista(params)
    }
    /**
     * postCatequista
     * 
     * @description metodo para insertar catequista
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCatequista(params){
        const objCatequista = this.getModel('catequista')
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
        const objCatequista = this.getModel('catequista')
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
        const objCatequista = this.getModel('catequista')
        return objCatequista.deleteCatequista(params)
    }
}

module.exports = catequistaDto