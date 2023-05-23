const Dto = require('../../core/Dto')

class accesoDto extends Dto {
    /**
     * getAcceso
     * 
     * @description metodo para listar acceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getAcceso(params){
        const objAcceso = this.getModel('acceso')
        return objAcceso.getAcceso(params)
    }
    /**
     * postAcceso
     * 
     * @description metodo para insertar acceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAcceso(params){
        const objAcceso = this.getModel('acceso')
        return objAcceso.postAcceso(params)
    }
    /**
     * putAcceso
     * 
     * @description metodo para actualizar acceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putAcceso(params){
        const objAcceso = this.getModel('acceso')
        return objAcceso.putAcceso(params)
    }
    /**
     * deleteAcceso
     * 
     * @description metodo para eliminar acceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteAcceso(params){
        const objAcceso = this.getModel('acceso')
        return objAcceso.deleteAcceso(params)
    }
}

module.exports = accesoDto