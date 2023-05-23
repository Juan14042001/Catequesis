const Dto = require('../../core/Dto')

class areasDto extends Dto {
    /**
     * getAreas
     * 
     * @description metodo para listar areas
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getAreas(params){
        const objAreas = this.getModel('areas')
        return objAreas.getAreas(params)
    }
    /**
     * postAreas
     * 
     * @description metodo para insertar areas
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAreas(params){
        const objAreas = this.getModel('areas')
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
        const objAreas = this.getModel('areas')
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
        const objAreas = this.getModel('areas')
        return objAreas.deleteAreas(params)
    }
}

module.exports = areasDto