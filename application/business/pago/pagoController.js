const Controller = require('../../core/Controller')

class pagoController extends Controller {
    /**
     * getPago
     * 
     * @description metodo para listar pago
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getPago(params){
        const objPago = this.getDto('pago')
        const data= await objPago.getPago(params)
        return {rows:data.length, data:data}
    }
    /**
     * postPago
     * 
     * @description metodo para insertar pago
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPago(params){
        const objPago = this.getDto('pago')
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
        const objPago = this.getDto('pago')
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
        const objPago = this.getDto('pago')
        return objPago.deletePago(params)
    }
}

module.exports = pagoController