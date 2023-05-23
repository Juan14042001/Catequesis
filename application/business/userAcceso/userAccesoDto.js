const Dto = require('../../core/Dto')

class userAccesoDto extends Dto {
    /**
     * getUserAcceso
     * 
     * @description metodo para listar userAcceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getUserAcceso(params){
        const objUserAcceso = this.getModel('userAcceso')
        return objUserAcceso.getUserAcceso(params)
    }
    /**
     * postUserAcceso
     * 
     * @description metodo para insertar userAcceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postUserAcceso(params){
        const objUserAcceso = this.getModel('userAcceso')
        return objUserAcceso.postUserAcceso(params)
    }
    /**
     * putUserAcceso
     * 
     * @description metodo para actualizar userAcceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putUserAcceso(params){
        const objUserAcceso = this.getModel('userAcceso')
        return objUserAcceso.putUserAcceso(params)
    }
    /**
     * deleteUserAcceso
     * 
     * @description metodo para eliminar userAcceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteUserAcceso(params){
        const objUserAcceso = this.getModel('userAcceso')
        return objUserAcceso.deleteUserAcceso(params)
    }
}

module.exports = userAccesoDto