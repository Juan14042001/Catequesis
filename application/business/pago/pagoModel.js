const Model  = require('../../core/Model')

class pagoModel extends Model {
    /**
     * getPago
     * 
     * @description metodo para listar pago
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getPago(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('pago')
        return query
    }
    /**
     * postPago
     * 
     * @description metodo para insertar pago
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postPago(params){
        const query = this.knex('pago').insert(params)
        return query
    }
    /**
     * putPago
     * 
     * @description metodo para actualizar pago
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putPago(params){
        const query = this.knex('pago').update(params).where('pago',params.id_pago)
        return query
    }
    /**
     * deletePago
     * 
     * @description metodo para eliminar pago
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deletePago(params){
        const query = this.knex('pago').delete(params).where('pago',params.id_pago)
        return query
    }
}

module.exports = pagoModel