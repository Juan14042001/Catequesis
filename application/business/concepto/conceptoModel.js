const Model  = require('../../core/Model')

class conceptoModel extends Model {
    /**
     * getConcepto
     * 
     * @description metodo para listar concepto
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getConcepto(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('concepto')
        return query
    }
    /**
     * postConcepto
     * 
     * @description metodo para insertar concepto
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postConcepto(params){
        const query = this.knex('concepto').insert(params)
        return query
    }
    /**
     * putConcepto
     * 
     * @description metodo para actualizar concepto
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putConcepto(params){
        const query = this.knex('concepto').update(params).where('concepto',params.id_concepto)
        return query
    }
    /**
     * deleteConcepto
     * 
     * @description metodo para eliminar concepto
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteConcepto(params){
        const query = this.knex('concepto').delete(params).where('concepto',params.id_concepto)
        return query
    }
}

module.exports = conceptoModel