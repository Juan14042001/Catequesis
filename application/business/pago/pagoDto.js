const Dto = require('../../core/Dto')

class pagoDto extends Dto {
    /**
     * getPago
     * 
     * @description metodo para listar pago
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPago(params){
        const objPago = this.getModel('pago')
        return objPago.getPago(params)
    }
    /**
     * postPago
     * 
     * @description metodo para insertar pago
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPago(params){
        const objPago = this.getModel('pago')
        return objPago.postPago(params)
    }
    /**
     * putPago
     * 
     * @description metodo para actualizar pago
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putPago(params){
        const objPago = this.getModel('pago')
        return objPago.putPago(params)
    }
    /**
     * deletePago
     * 
     * @description metodo para eliminar pago
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePago(params){
        const objPago = this.getModel('pago')
        return objPago.deletePago(params)
    }
}

module.exports = pagoDto