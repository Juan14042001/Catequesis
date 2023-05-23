const Model  = require('../../core/Model')

class userAccesoModel extends Model {
    /**
     * getUserAcceso
     * 
     * @description metodo para listar userAcceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getUserAcceso(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('user_acceso')
        return query
    }
    /**
     * postUserAcceso
     * 
     * @description metodo para insertar userAcceso
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postUserAcceso(params){
        const query = this.knex('user_acceso').insert(params)
        return query
    }
    /**
     * putUserAcceso
     * 
     * @description metodo para actualizar userAcceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putUserAcceso(params){
        const query = this.knex('user_acceso').update(params).where('user_acceso',params.id_user_acceso)
        return query
    }
    /**
     * deleteUserAcceso
     * 
     * @description metodo para eliminar userAcceso
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteUserAcceso(params){
        const query = this.knex('user_acceso').delete(params).where('user_acceso',params.id_user_acceso)
        return query
    }
}

module.exports = userAccesoModel