const Model  = require('../../core/Model')

class accesoModel extends Model {
    /**
     * getAcceso
     * 
     * @description metodo para listar acceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getAcceso(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('acceso')
        return query
    }
    /**
     * postAcceso
     * 
     * @description metodo para insertar acceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postAcceso(params){
        const query = this.knex('acceso').insert(params)
        return query
    }
    /**
     * putAcceso
     * 
     * @description metodo para actualizar acceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putAcceso(params){
        const query = this.knex('acceso').update(params).where('acceso',params.id_acceso)
        return query
    }
    /**
     * deleteAcceso
     * 
     * @description metodo para eliminar acceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteAcceso(params){
        const query = this.knex('acceso').delete(params).where('acceso',params.id_acceso)
        return query
    }
}

module.exports = accesoModel