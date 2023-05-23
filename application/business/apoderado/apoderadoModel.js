const Model  = require('../../core/Model')

class apoderadoModel extends Model {
    /**
     * getApoderado
     * 
     * @description metodo para listar apoderado
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    getApoderado(params){
        const colums = params && params.colums ? params.colums : '*'
        const query = this.knex.select(colums).from('apoderado')
        return query
    }
    /**
     * postApoderado
     * 
     * @description metodo para insertar apoderado
     * @param {Object} params 
     * @returns {Object} resultado de la consulta
     */
    postApoderado(params){
        const query = this.knex('apoderado').insert(params)
        return query
    }
    /**
     * putApoderado
     * 
     * @description metodo para actualizar apoderado
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    putApoderado(params){
        const query = this.knex('apoderado').update(params).where('apoderado',params.id_apoderado)
        return query
    }
    /**
     * deleteApoderado
     * 
     * @description metodo para eliminar apoderado
     * @param {Object} params
     * @returns {Object} resultado de la consulta 
     */
    deleteApoderado(params){
        const query = this.knex('apoderado').delete(params).where('apoderado',params.id_apoderado)
        return query
    }
}

module.exports = apoderadoModel