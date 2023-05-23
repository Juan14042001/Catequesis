const Dto = require('../../core/Dto')

class catequistaSalonDto extends Dto {
    /**
     * getCatequistaSalon
     * 
     * @description metodo para listar catequistaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getCatequistaSalon(params){
        const objCatequistaSalon = this.getModel('catequistaSalon')
        return objCatequistaSalon.getCatequistaSalon(params)
    }
    /**
     * postCatequistaSalon
     * 
     * @description metodo para insertar catequistaSalon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCatequistaSalon(params){
        const objCatequistaSalon = this.getModel('catequistaSalon')
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
        const objCatequistaSalon = this.getModel('catequistaSalon')
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
        const objCatequistaSalon = this.getModel('catequistaSalon')
        return objCatequistaSalon.deleteCatequistaSalon(params)
    }
}

module.exports = catequistaSalonDto