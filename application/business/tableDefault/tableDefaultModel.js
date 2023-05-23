const Model  = require('../../core/Model')

class table_defaultDefaultModel extends Model {
    /**
     * getTableDefault
     * 
     * @description metodo para listar table_defaultDefault
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getTableDefault(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('table_default')
        return query
    }
    /**
     * postTableDefault
     * 
     * @description metodo para insertar table_defaultDefault
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postTableDefault(params){
        const query = this.knex('table_default').insert(params)
        return query
    }
    /**
     * putTableDefault
     * 
     * @description metodo para actualizar table_defaultDefault
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putTableDefault(params){
        const query = this.knex('table_default').update(params).where('table_default',params.id_table_default)
        return query
    }
    /**
     * deleteTableDefault
     * 
     * @description metodo para eliminar table_defaultDefault
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteTableDefault(params){
        const query = this.knex('table_default').delete(params).where('table_default',params.id_table_default)
        return query
    }
}

module.exports = table_defaultDefaultModel