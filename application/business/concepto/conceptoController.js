const Controller = require('../../core/Controller')

class conceptoController extends Controller {
    /**
     * getConcepto
     * 
     * @description metodo para listar concepto
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    async getConcepto(params){
        const objConcepto = this.getDto('concepto')
        const data= await objConcepto.getConcepto(params)
        return {rows:data.length, data:data}
    }
    /**
     * postConcepto
     * 
     * @description metodo para insertar concepto
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postConcepto(params){
        const objConcepto = this.getDto('concepto')
        return objConcepto.postConcepto(params)
    }
    /**
     * putConcepto
     * 
     * @description metodo para actualizar concepto
     * @param {Object} params 
     * @returns {Object} resultado de la consulta 
     */
    putConcepto(params){
        const objConcepto = this.getDto('concepto')
        return objConcepto.putConcepto(params)
    }
    /**
     * deleteConcepto
     * 
     * @description metodo para eliminar concepto
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteConcepto(params){
        const objConcepto = this.getDto('concepto')
        return objConcepto.deleteConcepto(params)
    }
}

module.exports = conceptoController