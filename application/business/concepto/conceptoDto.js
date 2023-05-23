const Dto = require('../../core/Dto')

class conceptoDto extends Dto {
    /**
     * getConcepto
     * 
     * @description metodo para listar concepto
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getConcepto(params){
        const objConcepto = this.getModel('concepto')
        return objConcepto.getConcepto(params)
    }
    /**
     * postConcepto
     * 
     * @description metodo para insertar concepto
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postConcepto(params){
        const objConcepto = this.getModel('concepto')
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
        const objConcepto = this.getModel('concepto')
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
        const objConcepto = this.getModel('concepto')
        return objConcepto.deleteConcepto(params)
    }
}

module.exports = conceptoDto