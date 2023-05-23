const Model  = require('../../core/Model')

class eventoModel extends Model {
    /**
     * getEvento
     * 
     * @description metodo para listar evento
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getEvento(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('evento')
        return query
    }
    /**
     * postEvento
     * 
     * @description metodo para insertar evento
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postEvento(params){
        const query = this.knex('evento').insert(params)
        return query
    }
    /**
     * putEvento
     * 
     * @description metodo para actualizar evento
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putEvento(params){
        const query = this.knex('evento').update(params).where('evento',params.id_evento)
        return query
    }
    /**
     * deleteEvento
     * 
     * @description metodo para eliminar evento
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteEvento(params){
        const query = this.knex('evento').delete(params).where('evento',params.id_evento)
        return query
    }
}

module.exports = eventoModel