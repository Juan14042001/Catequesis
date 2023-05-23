const Dto = require('../../core/Dto')

class deudaDto extends Dto {
    /**
     * getDeuda
     * 
     * @description metodo para listar deuda
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getDeuda(params){
        const objDeuda = this.getModel('deuda')
        return objDeuda.getDeuda(params)
    }
    /**
     * postDeuda
     * 
     * @description metodo para insertar deuda
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postDeuda(params){
        const objDeuda = this.getModel('deuda')
        return objDeuda.postDeuda(params)
    }
    /**
     * putDeuda
     * 
     * @description metodo para actualizar deuda
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putDeuda(params){
        const objDeuda = this.getModel('deuda')
        return objDeuda.putDeuda(params)
    }
    /**
     * deleteDeuda
     * 
     * @description metodo para eliminar deuda
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteDeuda(params){
        const objDeuda = this.getModel('deuda')
        return objDeuda.deleteDeuda(params)
    }
}

module.exports = deudaDto