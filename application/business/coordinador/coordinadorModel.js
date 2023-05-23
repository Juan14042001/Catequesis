const Model  = require('../../core/Model')

class coordinadorModel extends Model {
    /**
     * getCoordinador
     * 
     * @description metodo para listar coordinador
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getCoordinador(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('coordinador')
        return query
    }
    /**
     * postCoordinador
     * 
     * @description metodo para insertar coordinador
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postCoordinador(params){
        const query = this.knex('coordinador').insert(params)
        return query
    }
    /**
     * putCoordinador
     * 
     * @description metodo para actualizar coordinador
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putCoordinador(params){
        const query = this.knex('coordinador').update(params).where('coordinador',params.id_coordinador)
        return query
    }
    /**
     * deleteCoordinador
     * 
     * @description metodo para eliminar coordinador
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteCoordinador(params){
        const query = this.knex('coordinador').delete(params).where('coordinador',params.id_coordinador)
        return query
    }
}

module.exports = coordinadorModel