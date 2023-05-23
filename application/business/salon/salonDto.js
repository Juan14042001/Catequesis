const Dto = require('../../core/Dto')

class salonDto extends Dto {
    /**
     * getSalon
     * 
     * @description metodo para listar salon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getSalon(params){
        const objSalon = this.getModel('salon')
        return objSalon.getSalon(params)
    }
    /**
     * postSalon
     * 
     * @description metodo para insertar salon
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postSalon(params){
        const objSalon = this.getModel('salon')
        return objSalon.postSalon(params)
    }
    /**
     * putSalon
     * 
     * @description metodo para actualizar salon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putSalon(params){
        const objSalon = this.getModel('salon')
        return objSalon.putSalon(params)
    }
    /**
     * deleteSalon
     * 
     * @description metodo para eliminar salon
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteSalon(params){
        const objSalon = this.getModel('salon')
        return objSalon.deleteSalon(params)
    }
}

module.exports = salonDto