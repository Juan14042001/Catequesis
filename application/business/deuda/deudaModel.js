const Model  = require('../../core/Model')

class deudaModel extends Model {
    /**
     * getDeuda
     * 
     * @description metodo para listar deuda
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getDeuda(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('deuda')
        return query
    }
    /**
     * postDeuda
     * 
     * @description metodo para insertar deuda
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postDeuda(params){
        const query = this.knex('deuda').insert(params)
        return query
    }
    /**
     * putDeuda
     * 
     * @description metodo para actualizar deuda
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putDeuda(params){
        const query = this.knex('deuda').update(params).where('deuda',params.id_deuda)
        return query
    }
    /**
     * deleteDeuda
     * 
     * @description metodo para eliminar deuda
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteDeuda(params){
        const query = this.knex('deuda').delete(params).where('deuda',params.id_deuda)
        return query
    }
}

module.exports = deudaModel