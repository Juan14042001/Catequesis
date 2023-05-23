const Model  = require('../../core/Model')

class nameModel extends Model {
    /**
     * getName
     * 
     * @description metodo para listar name
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getName(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('table')
        return query
    }
    /**
     * postName
     * 
     * @description metodo para insertar name
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postName(params){
        const query = this.knex('table').insert(params)
        return query
    }
    /**
     * putName
     * 
     * @description metodo para actualizar name
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putName(params){
        const query = this.knex('table').update(params).where('table',params.id_table)
        return query
    }
    /**
     * deleteName
     * 
     * @description metodo para eliminar name
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteName(params){
        const query = this.knex('table').delete(params).where('table',params.id_table)
        return query
    }
}

module.exports = nameModel